import { GithubUser } from "./githubUser.js";

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.tbody = this.root.querySelector('table tbody')
    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || [];
    this.update()   
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }


  async add(username) {
    try {
      const user = await GithubUser.search(username)
      const userExists = this.entries.find(entry => entry.login === user.login)

      if (user.login === undefined) {
        throw new Error('Usuario não encontrado!')
      }

      if (userExists) {
        throw new Error('Usuário já adicionado!')
      }

      this.entries = [user, ...this.entries]
      this.update()
      this.save()
    } catch (error) {
      alert(error.message)
    }

  }

  delete(user) {
    const filteredEntries = this.entries.filter(entry => entry.login !== user.login
    )

    this.entries = filteredEntries
    this.update()
    this.save()
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.update()
    this.onAdd()
  }

  onAdd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')
      const input = this.root.querySelector('.search input')
      if (!value) {
        return alert('Digite um  nome de usuario!!')
      }

      this.add(value)

      input.value = ''
    }
  }

  update() {
    this.removeAllTr()
    if (this.entries.length === 0) {
     return this.tbody.innerHTML = `
        <tr>
          <td align="center" colspan="${this.root.querySelectorAll('table thead th').length}" rowspan="">
            <img src="https://media.tenor.com/k_hV6yJJrEoAAAAM/n%C3%A3o-tem-nada-pra-gente-fazer-aqui-n%C3%A3o-greg%C3%B3rio-duvivier.gif" alt="No data" style="display: block; margin: 0 auto;" />
          </td>
        </tr>
      `;
    }

    this.entries.forEach(user => {
      const row = this.createRow()
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user p').textContent = `${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user span').textContent = `@${user.login}`
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers
      row.querySelector('.remove').onclick = () => {
        const isOK = confirm('Tem certeza que deseja deletar essa linha?')
        if (isOK) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
      console.log(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
            <td class="user">
              <img src="" alt="Users Image">
              <a href="" target="_blank">
                <p>Lucas Silva Porto</p>
                <span>lucasspor</span>
              </a>
            </td>
            <td class="repositories">
              8
            </td>
            <td class="followers">
              1
            </td>
            <td><Button class="remove">&times;</Button></td>
    `

    return tr
  }

  removeAllTr() {


    this.tbody.querySelectorAll('tr').forEach(
      tr => {
        tr.remove()
      }
    )
  }
}
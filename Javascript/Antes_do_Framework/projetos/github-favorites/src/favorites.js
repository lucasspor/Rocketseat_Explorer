export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.tbody = this.root.querySelector('table tbody')
    this.load()
  }

  load() {
    this.entries = [{
      login: 'lucasspor',
      name: "Lucas Silva Port",
      public_repos: '8',
      followers: '1'
    },
    {
      login: 'codemilio',
      name: "Carlos Emilio",
      public_repos: '28',
      followers: '14'
    }
    ]
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user p').textContent = `${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user span').textContent = `@${user.login}`
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers
      

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
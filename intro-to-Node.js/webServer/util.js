function html(body, title = 'Demo site') {
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
    <title>${title}</title>
</head>

<body>
    <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/catalog">Catalog</a>
            </li>
        </ul>
    </nav>
    <br />
    <hr />

    ${body}
</body>

</html>
`
}

const data = [
  {
    id: 'asdf0001',
    name: 'Product 1',
    color: 'Red',
  },
  {
    id: 'asdf0002',
    name: 'Product 2',
    color: 'Blue',
  },
  {
    id: 'asdf0003',
    name: 'Product 3',
    color: 'Green',
  },
  {
    id: 'asdf0004',
    name: 'Product 4',
    color: 'Yellow',
  },
]

module.exports = {
  html,
  data
}


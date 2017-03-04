import React, { Component } from 'react'

class App extends Component {
  render () {
    return <div className='grid'>
      <header>Header</header>
      <aside className='sidebar-right'>right sidebar</aside>
      <article>article</article>
      <aside className='sidebar-left'>left sidebar</aside>
      <footer>footer</footer>
    </div>
  }
}

export default App

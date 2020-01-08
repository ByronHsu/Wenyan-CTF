import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import problem from '../assets/images/problem.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
      text: ''
    }
    this._handleOnChange = this._handleOnChange.bind(this)
    this._handleOnClick = this._handleOnClick.bind(this)
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }
  _handleOnChange = (event) => {
    let text = event.target.value
    this.setState({text})
  }
  _handleOnClick = () => {
    if(this.state.text == "nmlab_is_great")
        alert("Success! NMLAB is the best!!")
    else
        alert("Wrong!")
  }
  render() {
    return (
      <Layout>
        <Helmet title="Wenyan-CTF" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          {/* Problem */}
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Problem</h2>
                </header>
                <p style={{fontWeight: 'bold'}}>
                敘述：給你一段<a href="https://github.com/LingDong-/wenyan-lang">wenyan-lang</a>的程式碼，以及其output，你必須理解wenyan-lang的語法，才能從中找出flag。
                </p>
                <p style={{fontStyle: 'italic', fontSize: '14px', writingMode: 'vertical-rl', margin: '0 auto'}}>
                吾有一列。名之曰「旗子」。<br/>
                <br/>
                充「旗子」以「你猜」。<br/>
                <br/>
                吾有一列。名之曰「結果」。 <br/>
                吾有一數。曰零。名之曰「哀」。 <br/>
                <br/>
                恆為是。<br/>
                加「哀」以一。名之曰「哀」。<br/>
                夫「旗子」之「哀」。名之曰「暫之一」。<br/>
                乘「暫之一」以二。減其以三。名之曰「暫之二」。<br/>
                充「結果」以「暫之二」。<br/>
                若「哀」大於十三者。乃止。云云。<br/>
                云云。<br/>
                <br/>
                凡「結果」中之「甲」。<br/>
                吾有一數。曰「甲」。書之。<br/>
                云云。<br/>
                </p>
                <p>
                Output: <br/>
                110
                109

                108
                97
                98
                95
                105
                115
                95
                103
                114
                101
                97
                116
                </p>
              </div>
            </div>
          </section>
          {/* Requirement */}
          {/*
          <section id="first" className="main special">
            <header className="major">
              <h2>Requirement</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Wenyan Language</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Crypto</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Innovation</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
            {/*
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
            </section>*/}
            {/* Problem */}
        {/*
          <section id="second" className="main special">
            <header className="major">
              <h2>Problem</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <img src={problem} alt="" style={{width: '100%'}}/>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
        </section> */}

          <section id="cta" className="main special">
            <header className="major">
              <h2>Submit</h2>
            </header>
            <p>
                把你找到的Flag輸入在底下看看結果如何！
            </p>
            <form>
                <input type="text" onChange={this._handleOnChange}></input>
            </form>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link className="button special" onClick={this._handleOnClick}>
                    Submit
                  </Link>
                </li>
                {/*
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>*/}
              </ul>
            </footer>
          </section>
          {/* Hint */}
          <section id="hint" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Hint</h2>
                </header>
                <p>
                <ol>
                    <li>將古文依據reference轉成你所熟悉的語言</li>
                    <li>直接跑那段程式碼會無法執行，因為要把「你猜」代換為某個序列 </li>
                </ol>
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index

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
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Preface</h2>
                </header>
                <p>
                    夫唐、虞之世，結繩而足治，屈指而足算。是時豈料百代之後，計算機械之巧，精於公輸之木鳶，善於武侯之流馬；程式語言之多，繁若《天官》之星宿，奇勝《山經》之走獸。鼠、蟹、鑽、魚，或以速稱。蛇、象、駱、犀，各爭文采。方知鬼之所以夜哭，天之所以雨粟。然以文言編程者 ，似所未有。此誠非文脈之所以傳，文心之所以保。嗟予小子，遂有斯志。然則數寸之烏絲猶覆於頭，萬卷之素書未破於手；一身長羈於遠邦，兩耳久曠于雅言。然夫文章者吾之所宿好，程式者偶承時人之謬譽。故希孟不慚年少，莊生不望無涯。乃作斯言。誠未能嘔瀝長吉之心血，亦庶幾免於義山之流沫。既成之後，復學干將鑄劍而自飼，越王嚐糞而當先。自謂偶追《十書》之筆意，但恨少八家之淋漓。此子山所謂士衡撫掌而甘心，平子見陋而固宜。然則雖實覆甕之質，尚存斧正之望；雖乏呂相之金，易字之渴蓋同。此亦開源之大義，吾輩之所以勉勵也。一笑。
                </p>
                {/*
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>*/}
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

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
            </footer>*/}
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Problem</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            {/*
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>*/}
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
            {/*
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>*/}
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Submit</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
              <input style={{width: '80%'}}></input>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
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
        </div>
      </Layout>
    )
  }
}

export default Index

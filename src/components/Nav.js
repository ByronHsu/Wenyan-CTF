import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta', 'hint'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Problem</a>
                </Scroll>
            </li>
            {/*
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Requirement</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">Problem</a>
                </Scroll>
            </li>*/}
            <li>
                <Scroll type="id" element="cta">
                    <a href="#">Submit</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="hint">
                    <a href="#">Hint</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav

import * as React from "react"
import Layout from "../components/layout"
import * as repos from "../styles/repos.module.css"

const RepoPage = () => {
  return (
    <Layout>
        <div class="RepoPage">
            <div className={repos.post}>
                <a href="https://github.com/steveleecode" target="_blank">
                    <img alt="steveleecode" src="https://github-readme-stats.vercel.app/api/?username=steveleecode&amp;theme=dark&amp;show_icons=true&amp;card_width=945px"></img>
                </a>
                <hr></hr>
                <h1 className={repos.repoHeader}>Repositories</h1>
                <div className={repos.repositories}>
                    <a className = {repos.repository}href="https://github.com/steveleecode/steveleecode.github.io" target="_blank">
                        <img alt="steveleecode/steveleecode.github.io" src="https://github-readme-stats.vercel.app/api/pin/?username=steveleecode&amp;repo=steveleecode.github.io&amp;theme=dark&amp;show_owner=false&amp;card_width=9px"></img>          
                    </a>
                    <a className = {repos.repository} href="https://github.com/steveleecode/TOFSensor" target="_blank">
                        <img alt="steveleecode/TOFSensor" src="https://github-readme-stats.vercel.app/api/pin/?username=steveleecode&amp;repo=TOFSensor&amp;theme=dark&amp;show_owner=false&amp;card_width=900px"></img>          
                    </a>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default RepoPage

export const Head = () => <title>Steve Lee - Repos</title>


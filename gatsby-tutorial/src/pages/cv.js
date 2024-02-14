import * as React from "react"
import Layout from "../components/layout"
import * as cv from "../styles/cv.module.css"

const CVPage = () => {
  return (
    <Layout>
        <div class="CVPage">
            <div className={cv.post}>
                <h1 className = {cv.mainHeader}>CV</h1>
                <div className = {cv.article}>
                    <div className={cv.card}> 
                        <h2 className={cv.cardHeader} id="basics-1">Basics</h2> 
                        <div> 
                            <table className={cv.cardContent}> 
                                <tbody>
                                    <tr> 
                                        <td className={cv.cardLabel}> 
                                            <b>Name</b> 
                                        </td> 
                                        <td className={cv.cardKey}> Stephen Lee</td> 
                                    </tr> 
                                    <tr> 
                                        <td className={cv.cardLabel}> 
                                            <b>Role</b> 
                                        </td> 
                                        <td className={cv.cardKey}> Student at Eastlake High School - C/O 2026 </td> 
                                    </tr> 
                                    <tr> 
                                        <td className={cv.cardLabel}> 
                                            <b>Email</b> 
                                        </td> 
                                        <td className={cv.cardKey}> 
                                            <a href="mailto:stevelee_2008@outlook.com" target="_blank">stevelee_2008@outlook.com</a> 
                                        </td> 
                                    </tr> 
                                    <tr> 
                                        <td className={cv.cardLabel}> 
                                            <b>Phone</b> 
                                        </td> 
                                        <td className={cv.cardKey}> 
                                            <a href="tel:(425)%20652-3781">(425) 652-3781</a> 
                                        </td> 
                                    </tr> 
                                    <tr> 
                                        <td className={cv.cardLabel}> 
                                            <b>Summary</b> 
                                        </td>
                                        <td class="p-1 pl-2 font-weight-light text"> A Seattle-born student seeking to apply his problem-solving skills in a technologically advanced environment </td> 
                                    </tr> 
                                </tbody>
                            </table> 
                        </div>
                    </div>

                    <div className={cv.card}> 
                        <h2 className={cv.cardHeader} id="basics-1">Volunteer</h2> 
                        <div> 
                            <ul style={{paddingLeft: "0px"}} > 
                                <li className={cv.cardContent}> 
                                    <div className={cv.cardContentTimeline}> 
                                        <div className={cv.timeFlex}> 
                                            <span className={cv.cardTime} > 2023.07 - Present </span> 
                                        </div> 
                                        <div className={cv.timeInstance}> 
                                            <h6 className={cv.timeInstanceHeader}> 
                                                <a href="https://mightycoders.io/" rel="external nofollow noopener" target="_blank">Youth Coding Volunteer</a> 
                                            </h6> 
                                            <h6 className={cv.timeInstanceContent} >Mighty Coders</h6> 
                                            <h6 className={cv.timeInstanceListLabel} >Led coding bootcamps to teach in-need youth coding skills such as</h6> 
                                            <ul className={cv.timeInstanceList}> 
                                                <li className={cv.timeInstanceBullets}> 
                                                    Scratch
                                                </li> 
                                                <li className={cv.timeInstanceBullets}> 
                                                    Roblox Studio 
                                                </li> 
                                                <li className={cv.timeInstanceBullets}> 
                                                    Python Game Development 
                                                </li> 
                                                <li className={cv.timeInstanceBullets}> 
                                                    Java Programming 
                                                </li> 
                                            </ul> 
                                        </div> 
                                    </div> 
                                </li> 
                            </ul> 
                        </div>
                    </div>

                    <div className={cv.card}> 
                        <h2 className={cv.cardHeader} id="basics-1">Education</h2> 
                        <div> 
                            <ul style={{paddingLeft: "0px"}} > 
                                <li className={cv.cardContent}> 
                                    <div className={cv.cardContentTimeline}> 
                                        <div className={cv.timeFlex}> 
                                            <span className={cv.cardTime} > 2022.09 - Present </span> 
                                        </div> 
                                        <div className={cv.timeInstance}> 
                                            <h6 className={cv.timeInstanceHeader}> 
                                                <a href="https://ehs.lwsd.org/" rel="external nofollow noopener" target="_blank">High School Diploma</a> 
                                            </h6> 
                                            <h6 className={cv.timeInstanceContent} >Eastlake High School, Sammamish, Washington</h6> 
                                            <h6 className={cv.timeInstanceListLabel}>Relevant Coursework:</h6> 
                                            <ul className={cv.timeInstanceList}> 
                                                <li className={cv.timeInstanceBullets}> 
                                                    AP Computer Science A
                                                </li> 
                                                <li className={cv.timeInstanceBullets}> 
                                                    AP Physics 1
                                                </li> 
                                                <li className={cv.timeInstanceBullets}> 
                                                    University of Washington Math 120 (Precalculus)
                                                </li> 
                                                <li className={cv.timeInstanceBullets}> 
                                                    AP Calculus AB
                                                </li> 
                                                <li className={cv.timeInstanceBullets}> 
                                                    AP Physics 2
                                                </li> 
                                                <li className={cv.timeInstanceBullets}> 
                                                    Python Data Structures
                                                </li> 
                                            </ul> 
                                        </div> 
                                    </div> 
                                </li> 
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default CVPage

export const Head = () => <title>Steve Lee - CV</title>

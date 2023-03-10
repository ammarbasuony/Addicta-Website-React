import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Team extends Component {
    render() {

        let team = this.props.theTeam.map(member => (
            <div key={member.id} className="col-md-3">
                <div className="member">
                    <div className="photo">
                        <div className="contact">
                            <div className="social-icons">
                                {member.social.map(icon => 
                                    <a href={icon.url} key={icon.id} target="_blank" rel="noopener noreferrer"><i className={`fab fa-${icon.icon}`}></i></a>    
                                )}
                            </div>
                        </div>
                        <img src={require(`../../assets/img/images/team/${member.img}`)} alt={member.name} />
                    </div>
                    <section>
                        <h3>{member.name}</h3>
                        <span>{member.title}</span>
                    </section>
                </div>
            </div>
        ));

        return (
            <div className="the-team">
                <div className="container">
                    <h1>Meet the team</h1>
                    <p>Each one of us having his/her own magical skills, we can be serious without wearing suits.</p>

                    <div className="team-members">
                        <div className="row">
                            <Fade bottom cascade>
                                {team}
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;
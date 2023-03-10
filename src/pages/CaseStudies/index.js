import React, { Component } from 'react';
import Layout from './Layout'
import Feature from './Sections/Feature'
import Social from './Sections/Social'
import Application from './Sections/Application'
import Section from './Sections/Section'
import data from '../../all-data.json';


class CaseStudies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            mainTitle: this.props.match.params.name,
            data: data.works_case_studies,
            active: true,
            feature: true
        }
    }


    componentDidMount() {
        let slug = this.state.data.findIndex((res) => {
            return res.slug === this.state.id;
        });
        document.title = "Addicta – " + this.state.data[slug].page.banner.main_title;
        // document.documentElement.scrollTop = 0;
    }

    render() {
        let slug = this.state.data.findIndex((res) => {

            return res.slug === this.state.id;


        });

        let sections = Object.keys(this.state.data[slug].page.section).map((section, index) => {
            let singleSection = this.state.data[slug].page.section[section];
            let pr = this.state.data[slug].page.section[section].classes;
            //delete singleSection.classes;
            let data = singleSection;

            if (section === 'features') {
                return (
                    <Section
                        key={index}
                        {...data}
                        {...pr}
                        active={data.image !== '' ? this.state.active : !this.state.active}
                    >
                        {singleSection.feature.map((feature, index) =>
                            <Feature
                                key={index}
                                title={feature.title}
                                text={feature.text}
                                image={feature.image}
                                Classmain={feature.Classmain}
                                Classtext={feature.Classtext}
                                ClassimageContainer={feature.ClassimageContainer}
                                active={feature.img !== '' ? this.state.feature : !this.state.feature}
                            />
                        )}
                    </Section>
                );
            } else if (section === "social") {
                return (
                    <Social
                        key={index}
                        {...data}
                    />
                );
            } else if (section === "download") {
                return (
                    <Application
                        key={index}
                        {...data}
                        {...pr}
                    />
                );
            } else {
                return (
                    <Section
                        key={index}
                        last={index === Object.keys(this.state.data[slug].page.section).length - 1 ? true : false}
                        {...data}
                        {...pr}
                        active={data.image !== '' ? this.state.active : !this.state.active}
                    />
                );
            }
        }
        );
        return (
            <>
                <Layout
                    mainTitle={this.state.data[slug].page.banner.main_title}
                    secondTitle={this.state.data[slug].page.banner.secondery_title}
                    text={this.state.data[slug].page.banner.text}
                    mainClass={this.state.data[slug].slug}
                    banner={this.state.data[slug].page.banner.banner}
                    categoryImage={{
                        branding: this.state.data[slug].page.banner.categories[0] ? `${this.state.data[slug].page.banner.categories[0].img}` : ``,
                        mobile: this.state.data[slug].page.banner.categories[1] ? `${this.state.data[slug].page.banner.categories[1].img}` : ``,
                        website: this.state.data[slug].page.banner.categories[2] ? `${this.state.data[slug].page.banner.categories[2].img}` : ``,
                        animation: this.state.data[slug].page.banner.categories[3] ? `${this.state.data[slug].page.banner.categories[3].img}` : ``,
                    }}
                    categoryName={{
                        branding: this.state.data[slug].page.banner.categories[0] ? `${this.state.data[slug].page.banner.categories[0].name}` : ``,
                        mobile: this.state.data[slug].page.banner.categories[1] ? `${this.state.data[slug].page.banner.categories[1].name}` : ``,
                        website: this.state.data[slug].page.banner.categories[2] ? `${this.state.data[slug].page.banner.categories[2].name}` : ``,
                        animation: this.state.data[slug].page.banner.categories[3] ? `${this.state.data[slug].page.banner.categories[3].name}` : ``
                    }}
                    next={this.state.data[slug + 1] !== undefined ? {
                        link: `${this.state.data[slug + 1].slug}`,
                        name: `${this.state.data[slug + 1].name}`,
                        img: `${this.state.data[slug + 1].image}`,
                    } : ''}


                    prev={this.state.data[slug - 1] !== undefined ? {
                        link: `${this.state.data[slug - 1].slug}`,
                        name: `${this.state.data[slug - 1].name}`,
                        img: `${this.state.data[slug - 1].image}`,
                    } : ''}
                    active={true}
                >

                    {sections}

                </Layout>
            </>
        )
    }
}
export default CaseStudies;
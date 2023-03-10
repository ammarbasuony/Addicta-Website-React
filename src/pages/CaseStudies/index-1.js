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
        document.documentElement.scrollTop = 0;
        //   console.log(this.state.data);
        //   console.log(this.state.id);
    }

    render() {
        let slug = this.state.data.findIndex((res) => {

            return res.slug === this.state.id;


        })


        return (
            <>
                <Layout
                    mainTitle={this.state.data[slug].page.banner.main_title}
                    secondTitle={this.state.data[slug].page.banner.secondery_title}
                    text={this.state.data[slug].page.banner.text}
                    mainClass={this.state.data[slug].slug}
                    categoryImage={{
                        branding: `${this.state.data[slug].page.banner.categories[0].img}`,
                        ux: `${this.state.data[slug].page.banner.categories[1].img}`,
                        mobile: `${this.state.data[slug].page.banner.categories[2].img}`
                    }}
                    categoryName={{
                        branding: `${this.state.data[slug].page.banner.categories[0].name}`,
                        ux: `${this.state.data[slug].page.banner.categories[1].name}`,
                        mobile: `${this.state.data[slug].page.banner.categories[2].name}`
                    }}
                    next={{
                        link: `${this.state.data[slug + 1].slug}`,
                        name: `${this.state.data[slug + 1].name}`,
                        img: `${this.state.data[slug + 1].image}`,
                    }}


                    prev={{
                        link: `${this.state.data[slug - 1].slug}`,
                        name: `${this.state.data[slug - 1].name}`,
                        img: `${this.state.data[slug - 1].image}`,
                    }}
                    active={true}




                >
                    {/* about section */}

                    <Section
                        title={this.state.data[slug].page.section.about.title}
                        text={this.state.data[slug].page.section.about.text}
                        image={this.state.data[slug].page.section.about.img}
                        active={this.state.data[slug].page.section.about.img !== '' ? this.state.active : !this.state.active}
                        // classes={{
                        //     main: `${this.state.data[slug].page.section.about.classes.main}`,
                        //     title: `${this.state.data[slug].page.section.about.classes.title}`,
                        //     text:`${this.state.data[slug].page.section.about.classes.text}`,
                        //     imageContainer:`${this.state.data[slug].page.section.about.classes.image_container}`,
                        //     image:`${this.state.data[slug].page.section.about.classes.image}`,
                        //     layout:`${this.state.data[slug].page.section.about.classes.layout}`
                        // }}
                        Classmain={this.state.data[slug].page.section.about.classes.main}
                        Classtitle={this.state.data[slug].page.section.about.classes.title}
                        Classtext={this.state.data[slug].page.section.about.classes.text}
                        ClassimageContainer={this.state.data[slug].page.section.about.classes.image_container}
                        Classimage={this.state.data[slug].page.section.about.classes.image}
                        Classlayout={this.state.data[slug].page.section.about.classes.layout}
                        ClassSection={this.state.data[slug].page.section.about.classes.section}
                        video={this.state.data[slug].page.section.about.video}
                    />

                    {/* brand section */}

                    <Section
                        title={this.state.data[slug].page.section.brand.title}
                        text={this.state.data[slug].page.section.brand.text}
                        image={this.state.data[slug].page.section.brand.img}
                        active={this.state.data[slug].page.section.brand.img !== '' ? this.state.active : !this.state.active}
                        Classmain={this.state.data[slug].page.section.brand.classes.main}
                        Classtitle={this.state.data[slug].page.section.brand.classes.title}
                        Classtext={this.state.data[slug].page.section.brand.classes.text}
                        ClassimageContainer={this.state.data[slug].page.section.brand.classes.image_container}
                        Classimage={this.state.data[slug].page.section.brand.classes.image}
                        Classlayout={this.state.data[slug].page.section.brand.classes.layout}
                        ClassSection={this.state.data[slug].page.section.brand.classes.section}
                        video={this.state.data[slug].page.section.brand.video}
                    />
                    {/* Wireframe section */}

                    <Section
                        title={this.state.data[slug].page.section.wireframe.title}
                        text={this.state.data[slug].page.section.wireframe.text}
                        image={this.state.data[slug].page.section.wireframe.img}
                        active={this.state.data[slug].page.section.wireframe.img !== '' ? this.state.active : !this.state.active}
                        Classmain={this.state.data[slug].page.section.wireframe.classes.main}
                        Classtitle={this.state.data[slug].page.section.wireframe.classes.title}
                        Classtext={this.state.data[slug].page.section.wireframe.classes.text}
                        ClassimageContainer={this.state.data[slug].page.section.wireframe.classes.image_container}
                        Classimage={this.state.data[slug].page.section.wireframe.classes.image}
                        Classlayout={this.state.data[slug].page.section.wireframe.classes.layout}
                        ClassSection={this.state.data[slug].page.section.wireframe.classes.section}
                        video={this.state.data[slug].page.section.wireframe.video}

                    />
                    {/* Features section */}

                    <Section
                        title={this.state.data[slug].page.section.features.title}
                        text={this.state.data[slug].page.section.features.text}
                        image={this.state.data[slug].page.section.features.img}
                        active={this.state.data[slug].page.section.features.img !== '' ? this.state.active : !this.state.active}
                        Classmain={this.state.data[slug].page.section.features.classes.main}
                        Classtitle={this.state.data[slug].page.section.features.classes.title}
                        Classtext={this.state.data[slug].page.section.features.classes.text}
                        ClassimageContainer={this.state.data[slug].page.section.features.classes.image_container}
                        Classimage={this.state.data[slug].page.section.features.classes.image}
                        Classlayout={this.state.data[slug].page.section.features.classes.layout}
                        ClassSection={this.state.data[slug].page.section.features.classes.section}
                        video={this.state.data[slug].page.section.features.video}
                    >
                        <Feature
                            title={this.state.data[slug].page.section.features.feature[0].title}
                            text={this.state.data[slug].page.section.features.feature[0].text}
                            image={this.state.data[slug].page.section.features.feature[0].image}
                            Classmain={this.state.data[slug].page.section.features.feature[0].Classmain}
                            Classtext={this.state.data[slug].page.section.features.feature[0].Classtext}
                            ClassimageContainer={this.state.data[slug].page.section.features.feature[0].ClassimageContainer}
                            active={this.state.data[slug].page.section.features.feature[0].img !== '' ? this.state.feature : !this.state.feature}
                        />
                        <Feature
                            title={this.state.data[slug].page.section.features.feature[1].title}
                            text={this.state.data[slug].page.section.features.feature[1].text}
                            image={this.state.data[slug].page.section.features.feature[1].image}
                            Classmain={this.state.data[slug].page.section.features.feature[1].Classmain}
                            Classtext={this.state.data[slug].page.section.features.feature[1].Classtext}
                            ClassimageContainer={this.state.data[slug].page.section.features.feature[1].ClassimageContainer}
                            active={this.state.data[slug].page.section.features.feature[1].img !== '' ? this.state.feature : !this.state.feature}
                        />
                        <Feature
                            title={this.state.data[slug].page.section.features.feature[2].title}
                            text={this.state.data[slug].page.section.features.feature[2].text}
                            image={this.state.data[slug].page.section.features.feature[2].image}
                            Classmain={this.state.data[slug].page.section.features.feature[2].Classmain}
                            Classtext={this.state.data[slug].page.section.features.feature[2].Classtext}
                            ClassimageContainer={this.state.data[slug].page.section.features.feature[2].ClassimageContainer}
                            active={this.state.data[slug].page.section.features.feature[2].img !== '' ? this.state.feature : !this.state.feature}
                        />
                    </Section>


                    <div className="section">
                        <Social />
                    </div>
                    {/* Video section */}


                    <Section
                        title={this.state.data[slug].page.section.video.title}
                        text={this.state.data[slug].page.section.video.text}
                        image={this.state.data[slug].page.section.video.img}
                        active={this.state.data[slug].page.section.video.img !== '' ? this.state.active : !this.state.active}
                        Classmain={this.state.data[slug].page.section.video.classes.main}
                        Classtitle={this.state.data[slug].page.section.video.classes.title}
                        Classtext={this.state.data[slug].page.section.video.classes.text}
                        ClassimageContainer={this.state.data[slug].page.section.video.classes.image_container}
                        Classimage={this.state.data[slug].page.section.video.classes.image}
                        Classlayout={this.state.data[slug].page.section.video.classes.layout}
                        ClassVideo={this.state.data[slug].page.section.video.classes.video}
                        ClassSection={this.state.data[slug].page.section.video.classes.section}
                        ClassOptions={this.state.data[slug].page.section.video.classes.options}
                        video={this.state.data[slug].page.section.video.video}
                    />
                    <div className="section">
                        <Application />
                    </div>
                    <Section
                        title={this.state.data[slug].page.section.testemony.title}
                        text={this.state.data[slug].page.section.testemony.text}
                        image={this.state.data[slug].page.section.testemony.img}
                        active={this.state.data[slug].page.section.testemony.img !== '' ? this.state.active : !this.state.active}
                        Classmain={this.state.data[slug].page.section.testemony.classes.main}
                        Classtitle={this.state.data[slug].page.section.testemony.classes.title}
                        Classtext={this.state.data[slug].page.section.testemony.classes.text}
                        ClassimageContainer={this.state.data[slug].page.section.testemony.classes.image_container}
                        Classimage={this.state.data[slug].page.section.testemony.classes.image}
                        Classlayout={this.state.data[slug].page.section.testemony.classes.layout}
                        subtitle={this.state.data[slug].page.section.testemony.subtitle}
                        ClassSubtitle={this.state.data[slug].page.section.testemony.classes.subtitle}
                        video={this.state.data[slug].page.section.testemony.video}
                    />
                    {/* <Navigation /> */}
                </Layout>
            </>
        )
    }
}
export default CaseStudies;
import React from 'React';
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./Home.scss");

import Copyright from '../../components/copyright/Copyright';
import Header from '../../components/header/Header';
import InlineSearch from '../../components/inlineSearch/InlineSearch';
import MajorLocations from '../../components/majorLocations/MajorLocations';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.description = `
		Chez Optical Center, nous souhaitons être proche de vous et répondre au mieux à vos besoins. Dans toutes les régions de France et au-delà des frontières, nous vous ouvrons ainsi les portes de nos magasins.

Cette proximité permet à nos opticiens et audioprothésistes diplômés d’Etat de vous réserver un accueil et un accompagnement personnalisés.

Depuis 1991, Optical Center propose le meilleur de la technologie et des tendances en optique.
L’audiologie et la basse vision viennent compléter nos offres et services pour vous apporter au sein d’un même espace les solutions visuelles et auditives qui vous conviennent le mieux. Chez Optical Center, nous mettons tout en œuvre pour vous permettre de profiter pleinement de vos sens.

En optique, nous vous proposons des lunettes de vue et des verres correcteurs innovants, ainsi que des lunettes de soleil, des lentilles de contact et des aides visuelles des plus grandes marques.
En audition, grâce à une gamme complète d’appareils auditifs esthétiques et de haute technologie, nous nous attachons à rendre accessible à tous le port d’audioprothèses afin d’appareiller celles et ceux qui présentent des troubles ou pertes auditifs.
		`.replace(/\n/g, '<br />');

		this.locations = [
			{url: 'url', label: 'France', cities: [
				{url: 'url', label: 'Paris'},
				{url: 'url', label: 'Lyon'},
				{url: 'url', label: 'Marseille'}
			]},
			{url: 'url', label: 'Luxembourg', cities: [
				{url: 'url', label: 'Dudelange'},
				{url: 'url', label: 'Luxembourg'},
				{url: 'url', label: 'Esch-sur-Alzette'}
			]},
			{url: 'url', label: 'Suisse', cities: [
				{url: 'url', label: 'Sion'},
				{url: 'url', label: 'Monthey'},
				{url: 'url', label: 'Sierre'}
			]}
		];
	}

	render() {
		return (
			<InlineCss componentName="Home" stylesheet={stylesheet}>
				<Header></Header>

				<div className="templates-home-basic">
					<div className="container-fluid">
						<div className="row">
							<div className="templates-home-basic__search" data-lf-home-bg>
								<div className="container templates-home-basic__search__container">
									<div className="row">
										<div className="col-xs-12">
											<div className="templates-home-basic__search__container__text">
												<h1 className="h1 templates-home-basic__search__container__text__title">
													<span className="templates-home-basic__search__container__text__title__span">
														Trouver le magasin le plus proche
													</span>
												</h1>
											</div>
										</div>
									</div>

									<div className="row templates-home-basic__search__container__nav">
										<div className="col-xs-12 col-sm-8 col-sm-offset-2">
											<InlineSearch query={this.props.query}
														  format="lg"
														  showCountrySelector="true"
														  showFilters="true">
											</InlineSearch>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="templates-home-basic__introduction">
						<div className="container">
							<h2 className="title h1 templates-home-basic__introduction__title">
								<span className="templates-home-basic__introduction__title__span">
									Bienvenue dans vos magasins Optical Center
								</span>
							</h2>

							<div className="templates-home-basic__introduction__description">
								<p dangerouslySetInnerHTML={{__html: this.description}}></p>
							</div>
						</div>
					</div>

					<div className="templates-home-basic__seo">
						<div className="container">
							<MajorLocations locations={this.locations}></MajorLocations>

							<Copyright></Copyright>
						</div>
					</div>
				</div>
			</InlineCss>
		);
	}
}

export default Home;

'use client';
import React from "react";
import Link from "next/link";
import FormContact from "./components/FormContact/FormContact";
import Carousel from "./components/Carousel/Carousel";
import DiseñoPersonalizadoHome from "./components/Icons/DiseñoPersonalizadoHome";
import DiseñoResponsiveHome from "./components/Icons/DiseñoResponsiveHome";
import SeoHome from "./components/Icons/SeoHome";
import Whatsapp from "./components/Icons/Whatsapp";
import Instagram from "./components/Icons/Instagram";
import Facebook from "./components/Icons/Facebook";
import { useTranslation } from 'react-i18next';

export default function Home() {
	const { t } = useTranslation('home');
	return (
		<>
			<main>
				<section>
					<video src="/img/home-movie.mp4" autoPlay loop muted></video>
				</section>

				{/*SECTION SERVICE HOME START*/}
				<section className="mx-4 md:mx-10 my-8 md:my-16">
					<h2 className="mb-5 md:mb-10 seccionTitle">{t('serviceSectionTitle')} </h2>
					<p className="generalDescriptions mb-7 md:mb-14">{t('serviceSectionText')}</p>

					<div className="flex flex-col md:flex-row cardServiceHome1 mb-10">
						<div>
							<DiseñoPersonalizadoHome />
						</div>

						<div className="cardServiceHomeDescription black">
							<h3>{t('customDesignTitle')}</h3>
							<p>{t('customDesignText')}</p>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-10">
						<div className="flex flex-col cardServiceHome2">
							<DiseñoResponsiveHome />

							<div className="cardServiceHomeDescription white">
								<h3>{t('responsiveDesignTitle')}</h3>
								<p>{t('responsiveDesignText')}</p>
							</div>
						</div>

						<div className="flex flex-col cardServiceHome3">
							<SeoHome />

							<div className="cardServiceHomeDescription black">
								<h3>{t('seoTitle')}</h3>
								<p>{t('seoText')}</p>
							</div>
						</div>
					</div>
				</section>
				{/*SECTION SERVICE HOME END*/}

				{/*SECTION PROCES HOME START*/}
				<section>
					<h2 className="mx-4 md:mx-10 my-5 md:my-10 seccionTitle">{t('procesSectionTitle')}</h2>

					<div className="itemCardProcess flex flex-col md:flex-row items-stretch descriptionBlack">

						<div className="procesImgContainer imgLeft w-[100%] md:w-[45%]">
							<img src="/img/analisis-image.jpg" alt={t('stageAnalysisAltImage')}/>
						</div>

						<div className="procesDescriptionContainer pb-8 md:py-6 px-5 md:pr-10 md:pl-0 flex flex-col md:flex-row">
							<span className="mr-0 md:mr-14 text-[rgba(8,230,245,0.70)]">01</span>

							<div>
								<h3 className="pb-3 md:pb-7">{t('stageAnalysisTitle')}</h3>
								<p>{t('stageAnalysisText')}</p>
							</div>
						</div>
					</div>

					<div className="itemCardProcess flex flex-col md:flex-row-reverse items-stretch descriptionWhite">

						<div className="procesImgContainer imgRight w-[100%] md:w-[45%]">
							<img src="/img/contacto-image.jpg" alt={t('stagePlanningAltImage')} />
						</div>

						<div className="procesDescriptionContainer pb-8 md:py-6 px-5 md:pl-10 md:pr-0 flex flex-col md:flex-row-reverse">
							<span className="ml-0 md:ml-14 text-[rgba(39,82,105,0.70)]">02</span>

							<div>
								<h3 className="pb-3 md:pb-7">{t('stagePlanningTitle')}</h3>
								<p>{t('stagePlanningText')}</p>
							</div>
						</div>
					</div>

					<div className="itemCardProcess flex flex-col md:flex-row items-stretch descriptionBlue">

						<div className="procesImgContainer imgLeft w-[100%] md:w-[45%]">
							<img src="/img/solucion-image.jpg" alt={t('stageSolutionAltImage')}/>
						</div>

						<div className="procesDescriptionContainer pb-8 md:py-6 px-5 md:pr-10 md:pl-0 flex flex-col md:flex-row">
							<span className="mr-0 md:mr-14 text-[rgba(8,230,245,0.70)]">03</span>

							<div>
								<h3 className="pb-3 md:pb-7">{t('stageSolutionTitlte')}</h3>
								<p>{t('stageSolutionText')}</p>
							</div>
						</div>
					</div>

				</section>
				{/*SECTION PROCES HOME END*/}

				{/*SECTION CAROUSEL HOME START*/}
				<section className="mx-4 md:mx-10 my-8 md:my-14">
					<h2 className="mx-4 md:mx-10 my-5 md:my-10 seccionTitle">{t('carouselSectionTitle')}</h2>
					<Carousel />
					<div className="btnContainerHome">
						<Link href={'/proyectos'} className="btnHome w-8/12 md:w-4/12">
							<button>
								{t('btnCarousel')}
							</button>
						</Link>
					</div>
				</section>
				{/*SECTION CAROUSEL HOME END*/}

				{/*SECTION FORM HOME START*/}
				<section>
					<div className="flex flex-col-reverse md:flex-row">
						<div className="formHelp px-4 md:px-10 md:w-5/12">
							<h3 className="pt-8 md:pt-0">{t('formTitle')}</h3>
							<p>{t('formText')}</p>
							<h4 className="pb-8 md:pb-0">{t('formSubTitle')}</h4>
						</div>
						<div className="formHome px-4 py-4 md:px-9 md:py-14 md:w-7/12">
							<FormContact />
						</div>
					</div>


					<div className="grid md:grid-cols-3">
						<div className="social whatsapp py-7 md:py-12">
							<Whatsapp width={72} height={72} fill="#F3F3F3" />
							<h3>Whatsapp</h3>
						</div>
						<div className="social instagram py-7 md:py-12">
							<Instagram width={72} height={72} fill="#F3F3F3" />
							<h3>Instagram</h3>
						</div>
						<div className="social facebook py-7 md:py-12">
							<Facebook width={72} height={72} fill="#F3F3F3" />
							<h3>Facebook</h3>
						</div>
					</div>

					<div className="phraseContainer">
						<h3>{t('phraseText')} <span>{t('phraseSpan')}</span></h3>
					</div>
				</section>
				{/*SECTION FORM HOME START*/}
			</main>
		</>
	);
}
'use client';
import React from "react";
import Link from "next/link";
import FormContact from "../../components/FormContact/FormContact";
import Carousel from "../../components/Carousel/Carousel";
import DiseñoPersonalizadoHome from "../../components/Icons/DiseñoPersonalizadoHome";
import DiseñoResponsiveHome from "../../components/Icons/DiseñoResponsiveHome";
import SeoHome from "../../components/Icons/SeoHome";
import Instagram from "../../components/Icons/Instagram";
import { useTranslation } from 'react-i18next';
import Arrow from "../../components/Icons/Arrow";
import Tiktok from "../../components/Icons/Tiktok";
import Linkedin from "../../components/Icons/Linkedin";
import CardPackages from "../../components/CardPackages/CardPackages";
import VideoHome from "../../components/VideoHome.tsx/VideoHome";

export default function ClientHome() {
	const { t } = useTranslation('home');

	return (

		<main>
			<section className="relative w-full h-[70vh] md:h-auto overflow-hidden">
				<VideoHome />

				<div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">
					<div className="w-full lg:w-[50%] text-center md:text-left items-center md:items-start flex flex-col gap-6">
						<h1 className="titleVideo text-[1.6rem] md:text-[2.2rem]">
							{t('titleVideo')}
						</h1>
						<p className="textVideo text-[12] md:text-[1rem]">
							{t('textVideo')}
						</p>
						<Link href={'/contacto'} className="btnVideo px-6 py-3 bg-[#08E6F5] hover:bg-opacity-20 backdrop-blur-md border border-[#08E6F5] hover:text-[#f3f3f3] hover:bg-[#08E6F5] text-[#191919] transition shadow-[0px_3px_8px_rgba(0,0,0,0.9)] hover:shadow-[0px_1px_4px_rgba(0,0,0,0.9)]">{t('btnVideo')} </Link>

					</div>
				</div>
			</section>



			{/*SECTION SERVICE HOME START*/}
			<section className="mx-4 md:mx-12 lg:mx-16 my-8 md:my-16">
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

				<div className="grid md:grid-cols-2 gap-10 md:gap-12">
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
						<img src="/img/analisis-image.jpg" alt={t('stageAnalysisAltImage')} />
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
						<img src="/img/contacto-image.webp" alt={t('stagePlanningAltImage')} />
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
						<img src="/img/solucion-image.jpg" alt={t('stageSolutionAltImage')} />
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
			<section className="mx-4 md:mx-10 lg:mx-16 my-8 md:my-14">
				<h2 className="mx-4 md:mx-10 my-5 md:my-10 seccionTitle">{t('carouselSectionTitle')}</h2>
				<Carousel />
				<div className="flex justify-center">
					<Link href={'/proyectos'} className="btnHome w-[60%] md:w-[30%]">
						<button className="btnVideo px-6 py-3 bg-[#08E6F5] hover:bg-opacity-20 backdrop-blur-md border-[2px] border-[#08E6F5] hover:text-[#f3f3f3] hover:bg-[#08E6F5] text-[#191919] transition w-[100%] shadow-[0px_3px_8px_rgba(0,0,0,0.9)] hover:shadow-[0px_1px_4px_rgba(0,0,0,0.9)]">
							{t('btnCarousel')}
						</button>
					</Link>
				</div>
			</section>
			{/*SECTION CAROUSEL HOME END*/}

			{/*SECTION PACKAGES HOME START*/}
			<section>
				<h2 className="mx-4 md:mx-10 my-5 md:my-10 seccionTitle">Elegí el plan ideal para tu próximo proyecto</h2>
				<CardPackages />
			</section>
			{/*SECTION PACKAGES HOME END*/}

			{/*SECTION FORM HOME START*/}
			<section>
				<div className="flex flex-col-reverse md:flex-row">
					<div className="formHelp px-4 md:px-10 md:w-5/12  border-b-[3px] md:border-b-[5px] border-[#08E6F5] ">
						<h2 className="pt-8 md:pt-0">{t('formTitle')}</h2>
						<p>{t('formText')}</p>
						<h3 className="pb-12 md:pb-40">{t('formSubTitle')}</h3>
						<div className="flex justify-center items-center animate-bounce pb-8 md:pb-0">
							<Arrow width={44} height={56} />
						</div>
					</div>
					<div className="formHome md:w-7/12">
						<div className="px-4 py-4 md:px-9 md:py-14">
							<FormContact />
						</div>
						<div className="phraseContainer border-b-[3px] md:border-b-[5px] border-[#08E6F5] py-2 md:py-4 px-4">
							<h3>{t('phraseText')} <span className="text-[#08E6F5]">{t('phraseSpan')}</span></h3>
						</div>
					</div>
				</div>


				<div className="grid md:grid-cols-3">
					<a href="https://www.instagram.com/iwebtecnology/" target="_blank" rel="noopener noreferrer" className="social instagram py-4 md:py-7">
						<Instagram width={56} height={56} fill="#F3F3F3" />
						<h4 className="text-[#f3f3f3]">Instagram</h4>
					</a>
					<a href="" aria-label="Button whatsapp" target="_blank" rel="noopener noreferrer" className="social bg-[#32ACE7] py-4 md:py-7">
						<Linkedin width={56} height={56} className="fill-[#191919]" />
						<h4 className="text-[#191919]">Linkedin</h4>
					</a>
					<a href="https://www.tiktok.com/@iwebtechnology" target="_blank" rel="noopener noreferrer" className="social bg-black py-4 md:py-7">
						<Tiktok width={56} height={56} fill1="#FF3434" fill2="#00F2EA" />
						<h4 className="text-[#f3f3f3]">Tiktok</h4>
					</a>
				</div>


			</section>
			{/*SECTION FORM HOME START*/}
		</main>

	);
}
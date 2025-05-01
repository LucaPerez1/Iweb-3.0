'use client'
import React from "react";
import CardContacto from "../../components/CardContacto/CardConacto";
import './pageNosotros.css'
import CarouselServicios from "../../components/CarouselServicios/CarouselServicios";
import Mision from "../../components/Icons/Mision";
import Valores from "../../components/Icons/Valores";
import Vision from "../../components/Icons/Vision";
import Consulta from "../../components/Icons/Consulta";
import Reunion from "../../components/Icons/Reunion";
import Analisis from "../../components/Icons/Analisis";
import DiseñoDelPlan from "../../components/Icons/DiseñoDelPlan";
import Desarrollo from "../../components/Icons/Desarrollo";
import Propuesta from "../../components/Icons/Propuesta";
import RevisionDeFeedback from "../../components/Icons/RevisionDeFeedback";
import EntregaFinal from "../../components/Icons/EntregaFinal";
import { useTranslation } from 'react-i18next';

export default function ClientNosotros() {
    const { t } = useTranslation('nosotros');
    return (
        
        <main>
                {/*SECTION ABOUT US START*/}
                <section className="aboutContainer">
                    <div className="about pb-56 sm:pb-60 md:pb-20 md:pb-0 px-4 md:px-10 pt-8 md:pt-14">
                        <div className=" w-[100%] md:w-[50%] flex flex-col items-center md:items-start">
                            <div className="flex flex-row items-center mb-6">
                                <h1 className="seccionTitle">{t('titleAboutUs')}</h1>
                                <img src="/logo.svg" alt="iweb logo" className="w-[150px] md:w-[250px]" />
                            </div>
                            <p className="pb-4 md:pb-8 shadow-">{t('firstTextAboutUs')}</p>
                            <p>{t('secondTextAboutUs')}</p>
                        </div>
                    </div>
                    <div className="imgContainer flex absolute z-[2] w-[90%] max-h-[320px] bottom-[-18%] left-[50%] transform translate-x-[-50%] md:w-[40%] md:max-h-[95%] md:top-[56px] md:right-[40px] md:transform-none md:left-auto md:bottom-auto">
                        <img src="/img/nosotros-image.jpg" alt={t('altImageAboutUs')} />
                    </div>
                </section>
                {/*SECTION ABOUT US END*/}

                {/*SECTION IDENTITY START*/}
                <section className="md:grid grid-cols-3 mx-4 md:mx-10 gap-14 mt-56 md:mt-10 lg:mt-14 mb-10 md:mb-14">
                    <div className="identityContainer mb-7">
                        <div className="titleIdentityContainer">
                            <Mision />
                            <h2>{t('misionTitle')}</h2>
                        </div>
                        <p>{t('misionText')}</p>
                    </div>


                    <div className="identityContainer mb-7">
                        <div className="titleIdentityContainer">
                            <Valores />
                            <h2>{t('valuesTitle')}</h2>
                        </div>
                        <p>{t('valuesText')}</p>
                    </div>

                    <div className="identityContainer mb-7">
                        <div className="titleIdentityContainer">
                            <Vision />
                            <h2>{t('visionTitle')}</h2>
                        </div>
                        <p>{t('visionText')}</p>
                    </div>
                </section>
                {/*SECTION IDENTITY END*/}

                {/*SECTION PROCES START*/}
                <section>
                    <h2 className="seccionTitle mt-10 mb-10 md:my-16">{t('processSectionTitle')}</h2>

                    <div className="md:grid grid-cols-3 mx-4 md:mx-10 gap-14 my-10 md:my-14">

                        <div className="stageContainer my-7">
                            <div className="tileStageContainer">
                                <h3 className="text-[rgba(39,82,105,0.7)]">01</h3>
                                <h4>{t('titleAnalysis')}</h4>
                            </div>
                            <p>{t('firstTextAnalysis')}</p>
                            <p>{t('secondTextAnalysis')}</p>
                        </div>

                        <div className="stageContainer my-7">
                            <div className="tileStageContainer">
                                <h3 className="text-[rgba(8,230,245,0.3)]">02</h3>
                                <h4>{t('titlePlanning')}</h4>
                            </div>
                            <p>{t('firstTextPlanning')}</p>
                            <p>{t('secondTextPlanning')}</p>
                        </div>

                        <div className="stageContainer my-7">
                            <div className="tileStageContainer">
                                <h3 className="text-[rgba(39,82,105,0.7)]">03</h3>
                                <h4>{t('titleSolution')}</h4>
                            </div>
                            <p>{t('textSolution')}</p>
                        </div>
                    </div>
                </section>
                {/*SECTION PROCES END*/}

                <section>
                    <CarouselServicios />
                </section>

                {/*SECTION WORK FLOW START*/}
                <section className="mx-4 md:mx-10 my-10 md:my-14">
                    <div className="grid grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-y-7 gap-x-6 md:gap-x-16 mb-10 md:mb-14">
                        <div className="workFlowDescription row-span-1 col-span-1">
                            <h2 className="mb-4 md:mb-7">{t('workFlowSectionTitle')}</h2>
                            <p>{t('workFlowSectionText')}</p>
                        </div>

                        <div className="workFlowImgContainer row-span-2 col-span-1">
                            <img src="/img/metodo-image.jpg" alt={t('workFlowImageAlt')} className=" w-[97%] md:w-[100%]" />
                        </div>

                        <div className="stepContainer flex row-span-1 col-span-1 pt-12 text-[12px] md:text-[16px]">
                            <div className="step">
                                <Consulta />
                                <div className="stepCircle"></div>
                                <h3 className="stepName">{t('stepConsultaion')}</h3>
                            </div>

                            <div className="step">
                                <Reunion />
                                <div className="stepCircle"></div>
                                <h3 className="stepName">{t('stepMeeting')}</h3>
                            </div>

                            <div className="step">
                                <Analisis />
                                <div className="stepCircle"></div>
                                <h3 className="stepName">{t('stepAnalysis')}</h3>
                            </div>

                            <div className="line top-[122px] mx-[42px]"></div>
                        </div>
                    </div>

                    <div className="stepContainer hidden md:flex text-[16px]">
                        <div className="step">
                            <DiseñoDelPlan />
                            <div className="stepCircle"></div>
                            <h3 className="stepName">{t('stepPlanDesign')}</h3>
                        </div>

                        <div className="step">
                            <Desarrollo />
                            <div className="stepCircle"></div>
                            <h3 className="stepName">{t('stepDevelopment')}</h3>
                        </div>

                        <div className="step">
                            <Propuesta />
                            <div className="stepCircle"></div>
                            <h3 className="stepName">{t('stepProposals')}</h3>
                        </div>

                        <div className="step">
                            <RevisionDeFeedback />
                            <div className="stepCircle"></div>
                            <h3 className="stepName">{t('stepFeedback')}</h3>
                        </div>

                        <div className="step">
                            <EntregaFinal />
                            <div className="stepCircle"></div>
                            <h3 className="stepName">{t('stepFinal')}</h3>
                        </div>

                        <div className="line top-[52%] mx-[44px]"></div>
                    </div>

                    <div className="stepContainer flex md:hidden text-[12px]">
                        <div className="step">
                            <DiseñoDelPlan />
                            <div className="stepCircle"></div>
                            <h3 className="stepName">{t('stepPlanDesign')}</h3>
                        </div>

                        <div className="step">
                            <Desarrollo />
                            <div className="stepCircle"></div>
                            <h3 className="stepName">{t('stepDevelopment')}</h3>
                        </div>

                        <div className="step">
                            <Propuesta />
                            <div className="stepCircle"></div>
                            <h3 className="stepName">{t('stepProposals')}</h3>
                        </div>

                        <div className="line top-[57%] mx-[44px]"></div>
                    </div>
                    <div className="stepContainer flex md:hidden mt-8 text-[12px]">
                        <div className="step">
                            <RevisionDeFeedback />
                            <div className="stepCircle"></div>
                            <h3 className="stepName">{t('stepFeedback')}</h3>
                        </div>

                        <div className="step ">
                            <EntregaFinal />
                            <div className="stepCircle"></div>
                            <h3 className="stepName">{t('stepFinal')}</h3>
                        </div>

                        <div className="line top-[57%] mx-[44px]"></div>
                    </div>

                </section>
                {/*SECTION WORK FLOW END*/}

                <CardContacto />
        </main>
        
    )
}
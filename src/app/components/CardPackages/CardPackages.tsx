import Includes from '../Icons/Includes'
import './cardPackages.css'
import { useTranslation } from 'react-i18next';

const CardPackages = () =>{
	const { t } = useTranslation('home');
	
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center lg:grid-cols-3 mx-4 md:mx-10 lg:mx-16 mb-16 gap-14">
							<div className="flex flex-col bg-[#121212] px-6 py-6 rounded-[15px] shadow-[0px_5px_20px_rgba(8,230,245,0.9)] text-[#f3f3f3] hover:bg-[#08E6F5] hover:bg-opacity-75 hover:text-[#191919] duration-700 group">
								<div className='descriptionPackages bg-[#08E6F5] text-[#191919] w-min py-1 px-4 rounded-[15px] mb-3 ml-auto group-hover:bg-[#191919] group-hover:text-[#08E6F5]'>
									<p className='font-bold'>Simple</p>
								</div>
								<h3 className="titlePackages mb-2">{t('packagesSimpleTitle')}</h3>
								<p className="descriptionPackages mb-6 font-light">{t('packagesSimpleDescription')}</p>
								<ul className="itemsPackages">
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemLanding')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemBasicDesign')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemSeo')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemResponsive')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemMail')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemHost')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemMaintenance')}</p>
									</li>
								</ul>
							</div>

							<div className="flex flex-col bg-[#121212] px-6 py-6 rounded-[15px] shadow-[0px_5px_20px_rgba(8,230,245,0.9)] text-[#f3f3f3] hover:bg-[#08E6F5] hover:bg-opacity-75 hover:text-[#191919] duration-700 group">
								<div className='descriptionPackages bg-[#08E6F5] text-[#191919] w-min py-1 px-4 rounded-[15px] mb-3 ml-auto group-hover:bg-[#191919] group-hover:text-[#08E6F5]'>
									<p className='font-bold'>Standard</p>
								</div>
								<h3 className="titlePackages mb-2">{t('packagesStandardTitle')}</h3>
								<p className="descriptionPackages mb-6 font-light">{t('packagesStandardDescription')}</p>
								<ul className="itemsPackages">
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemDevelop')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesDesignAvanced')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemSeo')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{('packagesItemResponsive')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemMail')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemHost')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemMaintenance')}</p>
									</li>
								</ul>
							</div>

                            <div className="flex flex-col bg-[#121212] px-6 py-6 rounded-[15px] shadow-[0px_5px_20px_rgba(8,230,245,0.9)] text-[#f3f3f3] hover:bg-[#08E6F5] hover:bg-opacity-75 hover:text-[#191919] duration-700 md:col-span-2 lg:col-span-1 md:w-[50%] md:mx-auto lg:w-[100%] group">
								<div className='descriptionPackages bg-[#08E6F5] text-[#191919] w-min py-1 px-4 rounded-[15px] mb-3 ml-auto group-hover:bg-[#191919] group-hover:text-[#08E6F5]'>
									<p className='font-bold'>Premium</p>
								</div>
                                <h3 className="titlePackages mb-2">{t('packagesPremiumTitle')}</h3>
                                <p className="descriptionPackages mb-6 font-light">{t('packagesPremiumDescription')}</p>
                                <ul className="itemsPackages">
								<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemDevelop')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t ('packagesDesignAvanced')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemSeo')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemResponsive')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemMail')}</p>
									</li>
									<li  className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemEcommerce')}</p>
									</li>
									<li  className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemDevelopSoftware')}</p>
									</li>
									<li  className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemRegister')}</p>
									</li>
									<li  className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemCart')}</p>
									</li>
									<li  className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemPayment')}</p>
									</li>
									<li  className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemDataBase')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemHost')}</p>
									</li>
									<li className='flex items-center gap-3 mb-2'>
										<div>
											<Includes />
										</div>
										<p>{t('packagesItemMaintenance')}</p>
									</li>
								</ul>
                            </div>
						</div>
    )
}

export default CardPackages
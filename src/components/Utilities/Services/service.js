const ServiceItem = ({ icon, title, description }) => {
    const openWhatsapp = () => {
        window.location.href = "https://wa.link/rockywebsite?text=I want Id"
    }
    return (
        <div className="col-lg-4 col-md-6">
            <div className="services-box mb-4 wow fadeInUp" data-wow-delay=".2s">
                <div className="services-content2">
                    {icon !== 'fa fa-phone'?
                    <div className="services-icon">
                        <i className={icon}></i>
                        <h5>{title}</h5>

                    </div>
                    :
                   <a onClick={() => openWhatsapp()} >
                    <div className="services-icon">
                    <i className={icon}></i>
                    <h5>{title}</h5>
                </div></a>}
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
export default ServiceItem;
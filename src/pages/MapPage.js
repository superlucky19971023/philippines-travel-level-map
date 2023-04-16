import React, {  useCallback, useRef } from "react";
import { toJpeg } from 'html-to-image'
import Map from "./Map"
import ".././App.css"

function MapPage() {
    const divRef = useRef(null);
  
    const fileName = 'phMap.jpg'
  
    const downloadJpg = useCallback(() => {
      if (divRef.current === null) {
        return
      }
      toJpeg(divRef.current, { cacheBust: true, })
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = `${fileName}`
          link.href = dataUrl
          link.click()
        })
        .catch((err) => {
          console.log(err)
        })
    }, [divRef]);

    return (
        <section>
            <div id="ezoic-pub-ad-placeholder-105"> </div>
            <section className="Map-container">
                <section className="Map-padding" ref={divRef}>
                    <Map/>
                </section>
                <section className="save-image-button" onClick={downloadJpg}>Save Image</section>
            </section>

    <section className="donate">
    If you liked this project and want it to be accessible in the future, please consider donating below. Thank you!

    <br></br>
    <br></br>

    <div className="donate-button">
   <form action="https://www.paypal.com/donate" method="post" target="_top">
    <input type="hidden" name="hosted_button_id" value="RP4T6EPM6GJ9A" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
    <img alt="" border="0" src="https://www.paypal.com/en_PH/i/scr/pixel.gif" width="1" height="1" />
    </form>
    </div>

    <br></br>
    <br></br>

    </section>
        <div id="ezoic-pub-ad-placeholder-103"> </div>
        {/*<AdsComponent dataAdSlot='8658257981' /> */}
        <div className="flag-counter">
            <a  href="https://info.flagcounter.com/s6dX">
                <img src="https://s11.flagcounter.com/count2/s6dX/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_16/viewers_3/labels_0/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0"/>
            </a>
        </div>
        </section>
    );
};

export default MapPage;
import React from 'react'
import '../styles/OtherPage.scss'

function OtherPage() {
  return (
    <div>
      {/* other_container */}
      <section className='other_section'>
        <div className='other_content'>
          <div className='other_article1'>
              <div className='other_article1_img'></div>
              <div className='other_article1_content'>
              <h5>The<br/>Emoticon,</h5>
              <p>Jordy<br/>animation</p>
              </div>
          </div>
          <div className='other_article2'>
            <div className='other_article2_img'></div>
              <div className='other_article2_content'>
              <h5>Galaxy<br/>Theme,</h5>
              <p>intern yangyang</p>
              </div>
          </div>
          <div className='other_article3'>
            <div className='other_article3_img'></div>
              <div className='other_article3_content'>
              <h5>The<br/>Animation,</h5>
              <p>After Effects<br/>and json</p>
              </div>  
          </div>
          <div className='other_article4'>
            <div className='other_article4_img'></div>
            <div className='other_article4_content'>
            <h5>Galaxy<br/>Theme Icon</h5>
            </div>
          </div>
        </div>
        <div class="circle_wrap">
                <span class="doughnut_Left_L"></span>
                <span class="doughnut_Left_s"></span>
                <span class="doughnut_Left"></span>

                <span class="doughnut_right_M"></span>
                <span class="doughnut_right_s"></span>
                <span class="doughnut_right"></span>
        </div>
      </section>
    </div>
  )
}

export default OtherPage
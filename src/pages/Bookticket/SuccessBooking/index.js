import React from 'react'

export default function SuccessBooking() {
  return (
    <div>
      <div className="infotop ng-scope" ng-if="pCinemaId!=1">
        <div className="poster-info" style={{ backgroundImage: 'url("https://s3img.vcdn.vn/123phim/2021/02/bo-gia-16144973777370.png")' }}>
        </div>
        <div className="block-info">
          <p className="filmname ng-binding">
            <span ng-class="{'ageType': true, 'ageType-general': film_age==0}" className="ng-binding ageType">C13</span>
            <span className="label version ng-binding">2D</span>
            <span className="label version digital ng-binding">Digital</span>Bố Già
    </p>
          <h3>
            <span className="pcinema ng-binding" style={{ color: '#8bc541' }}>BHD Star</span>
            <span className="cinemaname ng-binding"> - Bitexco</span>
          </h3>
          <p style={{ color: '#9B9B9B!important' }} className="ng-binding">L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
          <table style={{ marginTop: 10 }}>
            <tbody>
              <tr className="rowinfo">
                <td valign="top" className="titlecontent" width={90}>Suất chiếu:</td>
                <td className="contentfull ng-binding">10:30 13/04</td>
              </tr>
              <tr className="rowinfo">
                <td valign="top" className="titlecontent">Phòng:</td>
                <td className="contentfull ng-binding">RẠP 6</td>
              </tr>
              <tr className="rowinfo ng-scope" ng-if="pCinemaId!=1">
                <td valign="top" className="titlecontent">Ghế:</td>
                <td className="contentfull ng-binding">F04</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ clear: 'both' }} />
      </div>

    </div>
  )
}

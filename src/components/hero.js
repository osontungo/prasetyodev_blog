import React from "react"
import Typewriter from "typewriter-effect"
import { StaticImage } from "gatsby-plugin-image"
import Buttons from "../components/buttons"
import Social from "../components/social"

const Hero = () => {
  return (
    <div className="col-lg-12 col-md-12 col-xxl-12 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5">
        <div className="col-xs-12 col-sm-8 col-md-5 col-lg-6">
          <span className="d-flex justify-content-lg-end p-2">
            <StaticImage
              src="../images/profile-pic.png"
              alt="Profile picture"
              loading="lazy"
              className="img-fluid avatar-wobble heros-content-img"
            />
          </span>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-7 col-lg-6">
          <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .typeString(`Kiến tạo cuộc sống _`)
                  .pauseFor(1000)
                  .start()
              }}
            />
          </h2>
          <p className="lead text-transform-minus-2">
          Tận hưởng <b>từng khoảnh khắc</b>.{" "}
          Nơi ghi lại hành trình tìm kiếm <b>ý nghĩa cuộc sống</b>, qua những điều <b>giản dị</b>{" "} và <b>sâu sắc</b> nhất. 🌟
          Trong cuộc đời này, không ai bước vào thế giới của ta một cách ngẫu nhiên, và không sự kiện nào xảy ra mà không ẩn chứa 
          một ý nghĩa sâu xa. Mỗi con người ta gặp, mỗi câu chuyện ta trải qua – dù ngọt ngào hay đắng cay – đều là những mảnh ghép 
          không thể thiếu, định hình nên con người ta hôm nay. Những cuộc gặp gỡ ấy, những khoảnh khắc ấy, chính là lời nhắc nhở 
          tinh tế từ cuộc sống rằng mọi thứ đều diễn ra đúng thời điểm, đúng người, và vì một lý do nào đó.<br></br>  🌟Ghi lại, trân trọng 
          những điều quý giá ấy không chỉ là lưu giữ kỷ niệm, mà còn là biểu hiện của lòng biết ơn – lòng biết ơn với chính 
          hành trình này, đã mang đến cơ hội để ta học, để ta yêu, và để ta sống một cuộc đời trọn vẹn hơn từng ngày.🌟
          </p>
          <Social />
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Buttons propClass="btn-bloby" propRedirect="/about">
              Xem thêm
            </Buttons>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

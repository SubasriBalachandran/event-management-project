import React from "react";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
function UserPage() {
  return (
    <div>
      <div className="Div">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="230"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfy3v9kiHGWvokNTHAhiSD7_n0j7m_vRTtQq0i00wlHyt4S6JSfV1PjRU5t0QhHTalh0&usqp=CAU"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" fontFamily={"Josefin Sans"}>
                Wedding
              </Typography>
              <Typography
                variant="body2"
                color="black"
                fontFamily={"Josefin Sans"}
              >
                “A successful marriage requires falling in love many times,
                always with the same person.” - Mignon McLaughlin 1
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="230"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9D0MCKbSbWCO1ytOF6eGgyc_adwtiPyZXmvAvFYkP3m6pnITgswEqhebqJj8v9U1xC4&usqp=CAU"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" fontFamily={"Josefin Sans"}>
                BirthDay
              </Typography>
              <Typography
                variant="body2"
                color="black"
                fontFamily={"Josefin Sans"}
              >
                "We grow neither better nor worse as we get old, but more like
                ourselves." -Bernard Baruch
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 375 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="230"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCaf-FhEAlb2oubE8bJQQ3jr_AboareTwukg&usqp=CAU"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" fontFamily={"Josefin Sans"}>
                Events
              </Typography>
              <Typography
                variant="body2"
                color="black"
                fontFamily={"Josefin Sans"}
              >
                “Event management is the art of creating experiences that leave
                a lasting impression.”
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="230"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8BqhTrE-FaH_FZmqXLelhuMY4aWp_G-uNgDfchBMFDCxWfBK_8DV7flEcscB4wg1A-8&usqp=CAU"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" fontFamily={"Josefin Sans"}>
                Fashion
              </Typography>
              <Typography
                variant="body2"
                color="black"
                fontFamily={"Josefin Sans"}
              >
                "Fashion is not something that exists in dresses only. Fashion
                is in the sky, in the street. Fashion has to do with ideas, the
                way we live, what is happening." - Coco Chanel
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <Typography variant="h5">
        Some of the event organizers offer a complete package of food to
        accommodation. In such cases, the event website needs to organized well
        so that the user can easily find what they want. In these free event
        website templates, we have collected templates that give you all major
        options to create big event sites as well as small sites too. Make sure
        you check all the free event website templates mentioned in this list to
        get a better idea before starting your site.
      </Typography>
      <h3>Convention</h3>
      <img
        src="https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/10/free-event-website-templates-1000x750.jpg"
        alt=""
      />
      <Typography variant="h5">
        Convention is a lively event website template. Bright colors and swift
        animations deliver an engaging user experience. The consistent color
        scheme and precisely calibrated animations will help the site owners to
        easily brand their website. Call to action buttons to buy tickets are
        given in the easily accessible spots so that the audience can buy their
        tickets no matter on which page they are on. The creator has kept the
        code script as simple as possible. Hence, the developers can easily work
        with this template, and they can integrate any tools into this template
        without any issue.
      </Typography>
      <h3>Eventz</h3>
      <img
        src="https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/04/Eventz.jpg"
        alt=""
      />
      <Typography variant="h5">
        Digital conferences are becoming more common nowadays. Holding a digital
        conference isn’t an easy job; you have to take care of lots of technical
        stuff and have to configure them neatly into your website for a seamless
        experience. This template’s creator has designed it smartly by keeping
        all user needs & event organizer needs in mind. A neat event schedule is
        given on the homepage so that the user can free up their time when their
        favorite speakers get online. Since it is an HTML5 website template, all
        features work flawlessly from the front-end side. Plus, the clean code
        structure makes the developers’ backend work easier.
      </Typography>
    </div>
  );
}

export default UserPage;

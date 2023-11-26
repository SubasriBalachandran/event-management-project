import * as React from "react";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

export default function Home() {
  return (
    <>
      <div>
        <h1>EVENT MANAGEMENT SYSTEM</h1>
        <Typography variant="h5">
          Event management is the process of planning and hosting events for
          social or business purposes. Event management involves applying
          project management skills to the creation and development of events.
          Event management also requires working with staff and vendors to
          ensure the event is executed according to plan. Events can range from
          small-scale to large-scale and can include festivals, conferences,
          ceremonies, parties, concerts, or conventions.
        </Typography>
      </div>
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
    </>
  );
}

import { useEffect, useState } from "react";
import markWebber from "./images/avatar-mark-webber.webp";
import angelaGray from "./images/avatar-angela-gray.webp";
import jacobThompson from "./images/avatar-jacob-thompson.webp";
import rizkyHasanuddin from "./images/avatar-rizky-hasanuddin.webp";
import kimberlySmith from "./images/avatar-kimberly-smith.webp";
import nathanPeterson from "./images/avatar-nathan-peterson.webp";
import annaKim from "./images/avatar-anna-kim.webp";
import chess from "./images/image-chess.webp";

export default function App() {
  const [isRead, setIsRead] = useState(false);
  const [notification, setNotification] = useState(3);

  useEffect(() => {
    document.title =
      notification > 0 ? `Notifications (${notification})` : `Notifications`;
  }, [notification]);

  function handleMarkAsRead() {
    setIsRead(true);
    setNotification(0);
  }

  return (
    <div className="notifications">
      <div className="notifications__header">
        <div className="notifications__header-info">
          <p className="notifications__header-info-text">Notifications</p>
          <span className="notifications__header-info-num">{notification}</span>
        </div>
        <p className="notifications__header-mark" onClick={handleMarkAsRead}>
          Mark all as read
        </p>
      </div>

      <div className="notifications__body">
        <div className={`notifications__box ${isRead ? "read" : "unread"}`}>
          <img
            src={markWebber}
            alt="user"
            className="notifications__box-img"
          ></img>

          <div className="notifications__box-status">
            <p className="notifications__box-message">
              <span className="user">Mark Webber</span> reacted to your recent
              post{" "}
              <span className="post-event">My first tournament today!</span>{" "}
              <span
                className={`dot ${
                  isRead ? "notification-off" : "notification-on"
                }`}
              >
                &nbsp;
              </span>
            </p>
            <p className="notifications__box-time">1m ago</p>
          </div>
        </div>

        <div className={`notifications__box ${isRead ? "read" : "unread"}`}>
          <img
            src={angelaGray}
            alt="user"
            className="notifications__box-img"
          ></img>

          <div className="notifications__box-status">
            <p className="notifications__box-message">
              <span className="user">Angela Gray</span> followed you
              <span
                className={`dot ${
                  isRead ? "notification-off" : "notification-on"
                }`}
              >
                &nbsp;
              </span>
            </p>
            <p className="notifications__box-time">5m ago</p>
          </div>
        </div>

        <div className={`notifications__box ${isRead ? "read" : "unread"}`}>
          <img
            src={jacobThompson}
            alt="user"
            className="notifications__box-img"
          ></img>

          <div className="notifications__box-status">
            <p className="notifications__box-message">
              <span className="user">Jacob Thompson</span> has joined your group{" "}
              <span className="club">Chess Club</span>
              <span
                className={`dot ${
                  isRead ? "notification-off" : "notification-on"
                }`}
              >
                &nbsp;
              </span>
            </p>
            <p className="notifications__box-time">1 day ago</p>
          </div>
        </div>

        <div className="notifications__box notifications__box--respond-type">
          <img
            src={rizkyHasanuddin}
            alt="user"
            className="notifications__box-img"
          ></img>

          <div className="notifications__box-status">
            <p className="notifications__box-message">
              <span className="user">Rizky Hasanuddin</span> sent you a private
              message
            </p>

            <p className="notifications__box-time">5 days ago</p>

            <div className="notifications__box-message-private">
              <p>
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game.
              </p>
            </div>
          </div>
        </div>

        <div className="notifications__box">
          <img
            src={kimberlySmith}
            alt="user"
            className="notifications__box-img"
          ></img>

          <div className="notifications__box-status">
            <p className="notifications__box-message">
              <span className="user">Kimberly Smith</span> commented on your
              picture
            </p>
            <p className="notifications__box-time">1 week ago</p>
          </div>

          <img className="post-img" src={chess} alt="chess"></img>
        </div>

        <div className="notifications__box">
          <img
            src={nathanPeterson}
            alt="user"
            className="notifications__box-img"
          ></img>

          <div className="notifications__box-status">
            <p className="notifications__box-message">
              <span className="user">Nathan Peterson</span> reacted to your
              recent post{" "}
              <span className="post-event">
                5 end-game strategies to increase your win rate
              </span>
            </p>
            <p className="notifications__box-time">2 weeks ago</p>
          </div>
        </div>

        <div className="notifications__box">
          <img
            src={annaKim}
            alt="user"
            className="notifications__box-img"
          ></img>

          <div className="notifications__box-status">
            <p className="notifications__box-message">
              <span className="user">Anna Kim</span> left the group{" "}
              <span className="club">Chess Club</span>
            </p>
            <p className="notifications__box-time">2 weeks ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

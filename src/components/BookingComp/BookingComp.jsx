import MeetingLocation from "./Location"
import Plan from "./Plan"
import TourCard from "./TourCard"
import GuestReviews from "./GuestReviews"
import TourInclusions from "./TourInclusions"

function BookingComp() {
    return (

        <div>
            <TourCard />
            <TourInclusions />
            <Plan />
            <MeetingLocation />
            <GuestReviews />
        </div>

    )
}

export default BookingComp
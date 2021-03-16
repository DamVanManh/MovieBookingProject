import bookingApi from "../../api/bookingApi";
import { BOOK_TICKET_FAIL, BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS } from "../constants/Movie";
export const bookTicket = (danhSachVe) => {
    return (dispath) => {
        dispath({
            type: BOOK_TICKET_REQUEST
        })
        bookingApi.postDatVe(danhSachVe)
            .then(result => {
                dispath({
                    type: BOOK_TICKET_SUCCESS,
                    payload: {
                        data: result.data,
                    }
                })
            }
            )
            .catch(
                error => {
                    // dispath({
                    //     type: BOOK_TICKET_FAIL,
                    //     payload: {
                    //         error: error.response.data,
                    //     }
                    // })
                    console.log(error)
                }
            )
    }
}
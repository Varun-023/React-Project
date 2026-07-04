import vendorReducer, { addVendor } from "../redux/vendorSlice";

describe("vendorSlice", () => {

    test("should add IBM vendor when not exists", () => {

        const initialState = {
            vendorList: [
                { id: 1, name: "Infosys", status: "Approved", category: "IT" }
            ],
            loading: false,
            error: ""
        };

        const nextState = vendorReducer(initialState, addVendor());

        expect(nextState.vendorList.length).toBe(2);
        expect(nextState.vendorList[1].name).toBe("IBM");

    });

});

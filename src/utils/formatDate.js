function formatDate(dateValue) {

    if (!dateValue) {
        return "";
    }

    const date = new Date(dateValue);

    return date.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });

}

export default formatDate;

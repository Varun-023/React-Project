export const handleApiError = (error) => {
    if (error.response?.status === 401) {
        localStorage.clear();
        window.location = "/session-expired";
    }

    return (
        error.response?.data?.message || "Something went wrong"
    );
};

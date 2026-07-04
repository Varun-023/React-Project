function filterBySearch(items, query, fields) {

    if (!query) {
        return items;
    }

    const searchText = query.toLowerCase();

    return items.filter((item) => {

        return fields.some((field) => {

            const value = item[field];

            if (!value) {
                return false;
            }

            return String(value).toLowerCase().includes(searchText);

        });

    });

}

function exportToCSV(data, filename) {

    if (!data || data.length === 0) {
        return;
    }

    const headers = Object.keys(data[0]);

    const rows = data.map((row) => {

        return headers.map((header) => row[header]).join(",");

    });

    const csvContent = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();

}

function paginateList(items, page, pageSize) {

    const start = (page - 1) * pageSize;

    return items.slice(start, start + pageSize);

}

export { filterBySearch, exportToCSV, paginateList };

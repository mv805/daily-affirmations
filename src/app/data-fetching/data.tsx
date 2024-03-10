export const fetchRandomQuote = async () => {
    let response;
    try {
        response = await fetch(`http://localhost:3052/quote`);

        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error(
                "An error occurred while fetching the quote:",
                error.message
            );
        } else {
            console.error("An unknown error occurred:", error);
        }
    }
};


'use client';
import React, { useEffect, useState } from "react";
import WidgetFrame from "../ui/WidgetFrame";
import { fetchRandomQuote } from "@/app/data-fetching/data";

const DailyQuote = () => {
    const [quote, setQuote] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getQuote = async () => {
            const data = await fetchRandomQuote();
            setQuote(data.quote);
            setLoading(false);
        };

        getQuote();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
      <WidgetFrame>
        <h1 className="font-bold text-xl">Your Quote of the Day:</h1>
        <p className="text-sky-300">{quote}</p>
      </WidgetFrame>
    );
};

export default DailyQuote;

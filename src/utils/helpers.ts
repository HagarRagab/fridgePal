import type { Models } from "appwrite";
import { addDays, format, isAfter, isBefore, isPast } from "date-fns";

export function formatDate(date: string): string {
    return format(new Date(date), "MM/dd/yyyy");
}

export function generateUsername(name: string) {
    return `@${name.replace(/\s/g, "")}${Math.floor(Math.random() * 1000)}`;
}

export function stringAvatar(name: string) {
    return `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
}

export function expireSoonItems(
    inventory: Models.DocumentList<Models.Document>
) {
    const expireSoon = inventory?.documents.filter((item: Models.Document) => {
        const expireDate = new Date(item.expire_date);
        const now = new Date();
        const nextWeek = addDays(now, 7);

        return isAfter(expireDate, now) && isBefore(expireDate, nextWeek);
    });

    return expireSoon;
}

export function expiredItems(inventory: Models.DocumentList<Models.Document>) {
    const expiredItems = inventory?.documents.filter((item: Models.Document) =>
        isPast(new Date(item.expire_date))
    );
    return expiredItems;
}

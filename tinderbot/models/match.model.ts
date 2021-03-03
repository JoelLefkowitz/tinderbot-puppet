export interface Match {
	id: number;
	created: string;
	firstName: string;
	lastName: string;
}

export interface MatchPayload {
	firstName: string;
	lastName: string;
}

export const mockMatch = {
	id: 1,
	created: "2011-10-05T14:48:00.000Z",
	firstName: "firstName",
	lastName: "lastName"
};

export const mockMatchPayload = {
	firstName: "firstName",
	lastName: "lastName"
};

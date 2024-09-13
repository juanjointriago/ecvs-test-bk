export interface Contact {
    id:           number;
    first_name:   string;
    last_name:    string;
    email:        string;
    gender:       Gender;
    ip_address:   string;
    phone_number: string;
}

export type Gender  = "Bigender" | "Female"|  "Male"

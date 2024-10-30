import { IDepartment } from "./IDepartment.ts";

interface IAssociation {
    id: number;
    name: string;
    address: string;
    zip_code: string;
    department_id: number;
    department: IDepartment;
    city: string;
    phone_number: string;
    description: string | null;
    url_image: string | null;
    created_at: Date;
    updated_at: Date;
}

export { IAssociation };
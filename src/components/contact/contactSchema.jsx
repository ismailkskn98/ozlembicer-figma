import React from 'react'
import * as z from 'zod';

export default function ContactSchema() {
    return z.object({
        name: z.string().min(2, 'Name is required'),
        surname: z.string().min(2, 'Surname is required'),
        email: z.string().email('Invalid email address'),
        mobile: z.string().optional(),
        age: z.string().optional(),
        gender: z.enum(['male', 'female', 'other']).optional(),
        activeHairLoss: z.string().min(1, 'This field is required'),
        illnesses: z.string().optional(),
        previousTransplant: z.string().optional(),
        medications: z.string().optional(),
        alcoholDrugsSmoke: z.string().optional(),
        priorityArea: z.string().optional(),
        hairLength: z.string().optional(),
        other: z.string().optional(),
        images: z.any().optional(),
    })
}

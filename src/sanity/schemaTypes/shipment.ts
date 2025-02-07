
import {PackageIcon} from '@sanity/icons'
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'shipment',
  title: 'Shipment',
  type: 'document',
  icon: PackageIcon, // Use an icon related to shipment (change this if needed)
  fields: [
    // ShipTo Address
    defineField({
      name: 'shipToAddress',
      title: 'Ship To Address',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'firstName',
          title: 'First Name',
          type: 'string',
        }),
        defineField({
          name: 'lastName',
          title: 'Last Name',
          type: 'string',
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'string',
        }),
        defineField({
          name: 'apartment',
          title: 'Apartment',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
        }),
        defineField({
          name: 'country',
          title: 'Country',
          type: 'string',
        }),
        defineField({
          name: 'postal',
          title: 'Postal Code',
          type: 'string',
        }),
      ],
    }),

    // ShipFrom Address
    defineField({
      name: 'shipFromAddress',
      title: 'Ship From Address',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
        }),
        defineField({
          name: 'addressLine1',
          title: 'Address Line 1',
          type: 'string',
        }),
        defineField({
          name: 'addressLine2',
          title: 'Address Line 2',
          type: 'string',
        }),
        defineField({
          name: 'cityLocality',
          title: 'City/Locality',
          type: 'string',
        }),
        defineField({
          name: 'stateProvince',
          title: 'State/Province',
          type: 'string',
        }),
        defineField({
          name: 'postalCode',
          title: 'Postal Code',
          type: 'string',
        }),
        defineField({
          name: 'countryCode',
          title: 'Country Code',
          type: 'string',
        }),
        defineField({
          name: 'addressResidentialIndicator',
          title: 'Residential Indicator',
          type: 'string',
        }),
      ],
    }),

    // Metadata fields
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'shipToAddress.firstName', // Name of the recipient
      subtitle: 'shipToAddress.address', // Address of the recipient
      email: 'shipToAddress.email', // Email of the recipient
      media: 'icon', // Using the icon here
    },
    prepare(selection) {
      const { title, subtitle, email } = selection;
      return {
        title: `${title} (${subtitle})`, // Title: First Name with Address
        subtitle: `Email: ${email}`, // Adding email in subtitle
        media: PackageIcon , 
      };
    },
  },
});

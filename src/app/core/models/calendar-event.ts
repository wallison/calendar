

/* tslint:disable:variable-name */
export class CalendarEvent {
  id: number;
  user: string;
  event_status: string;
  url: string;
  cost_display: number;
  calendar_id: number;
  start_datetime: Date;
  end_datetime: Date;
  cost_type: string;
  timezone: string;
  title: string;
  description_short: string;
  images: [
    {
      small: {
        width: number;
        url: string;
        height: number;
      },
      thumbnail: {
        width: number;
        url: string;
        height: number;
      },
      reference_id: number,
      file_name: string;
      created_at: Date;
      id: number;
      medium: {
        width: number;
        url: string;
        height: number;
      },
      title: string,
      full: {
        width: number;
        url: string;
        height: number;
      }
    }
  ];
  taxonomies: {
    taxonomy_tag: [
      {
        title: string
        id: number;
        reference_id: number;
        image: string;
        color: string;
      }
    ],
    taxonomy_venue: [
      {
        country: string,
        image: string;
        website: string;
        address: string;
        geo_location: string;
        reference_id: number;
        city: string;
        title: string;
        venue_type: string;
        id: number;
      }
    ],
    taxonomy_category: [
      {
        image: string;
        reference_id: number;
        color: string;
        item_type: string;
        created_at: Date;
        id: number;
        title: string;
      }
    ]
  };
}

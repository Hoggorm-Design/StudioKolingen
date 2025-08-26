import {
    HomeIcon,
    ArrowRightIcon,
    BlockContentIcon,
    BasketIcon,
    MarkerIcon,
    DocumentIcon,
    StackIcon,
    InfoFilledIcon,
    ImageIcon,
    ArchiveIcon,
    BookmarkIcon,
    ComponentIcon
} from '@sanity/icons'
import { StructureResolver } from 'sanity/structure'


const allDocs = ['logoImages', 'link', 'facilities', 'blogPost', 'makersSpaceYears']


export const structure: StructureResolver = (S) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Front page images (Carousel)') 
                .icon(HomeIcon)
                .child(S.editor()
                    .id('frontPageImageCarousel')
                    .schemaType('frontPageImageCarousel')
                    .documentId('33d7ffc6-c6d8-4446-9d8f-b750ed2cdb48')
                ),

            S.listItem()
                .title('Logo Images') 
                .icon(ImageIcon)
                .child(S.editor()
                    .id('logoImages')
                    .schemaType('logoImages')
                    .documentId('2fd29b6b-c00c-4d9d-92c2-3dc9efda9d18')
                ),
                /*
            S.listItem()
                .title("Front page image links")
                .icon(ArrowRightIcon)
                .child(S.documentTypeList("imagePageLink").title("Images")),
                */

            S.listItem() 
                .title("Front page links")
                .icon(ArrowRightIcon)
                .child(S.editor()
                    .id('frontPageImages')
                    .schemaType('frontPageImages')
                    .documentId('01b69dc1-89d6-45ef-94b4-3e24f325681b')
                ),

            S.listItem()
                .title("About")
                .icon(BlockContentIcon)
                .child(S.editor()
                    .id('aboutStudioKolingenAir')
                    .schemaType('aboutStudioKolingenAir')
                    .documentId('812b2e99-d4b6-4ff4-90fa-1b96a1a80029')
                ),

            S.divider(),

            S.listItem()
                .title("Prices")
                .icon(BasketIcon)
                .child(S.editor()
                    .id('prices')
                    .schemaType('prices')
                    .documentId('e565be7b-c263-45bb-9168-2f25f9abbc3e')
                ),


            S.listItem() 
                .title("Location")
                .icon(MarkerIcon)
                .child(S.editor()
                    .id('ourLocation')
                    .schemaType('ourLocation')
                    .documentId('3f02ea8c-12af-4ddd-85d3-463716b87495')
                ),

            /*
            S.listItem()
                .title("Location link")
                .icon(LinkIcon)
                .child(S.documentTypeList("link").title("Image and location")),
            */
            S.listItem()
                .title("Contact us") 
                .icon(InfoFilledIcon)
                .child(S.editor()
                    .id('contactUs')
                    .schemaType('contactUs')
                    .documentId('e72d182d-3ca1-445d-a640-6c7cdbf0bcaf')
                ),
            S.divider(),

            S.listItem()
                .title("Facilities")  
                .icon(StackIcon)
                .child(S.editor()
                    .id('facilitiesPageInfo')
                    .schemaType('facilitiesPageInfo')
                    .documentId('97de8f3b-2b30-4099-baa7-9f54bb07ca2a')
                ),
            /*
            S.listItem()
                .title("Facilities")
                .icon(StackIcon)
                .child(S.documentTypeList("facilities").title("Facilities")),
            */
            S.divider(),

            
            S.listItem()
                .title("Artists") 
                .icon(DocumentIcon)
                .child(S.editor()
                    .id('artistPageInfo')
                    .schemaType('artistPageInfo')
                    .documentId('c6b3e092-b7ee-4404-9a8d-8efb18b04b9e')
                ),
            /*
            S.listItem()
                .title("Artists")
                .icon(UsersIcon)
                .child(S.documentTypeList("artists").title("Artists")),
            */
           
            S.listItem()
                .title("Blog Posts")
                .icon(ArchiveIcon)
                .child(S.documentTypeList("blogPost").title("Blog posts")),
            
            S.divider(),

            S.listItem() 
                .title("Makers Space")
                .icon(ComponentIcon)
                .child(S.editor()
                    .id('makersSpacePageInfo')
                    .schemaType('makersSpacePageInfo')
                    .documentId('fd7818e4-7a6f-44cd-8799-1e6a9817eb6f')
            ),
                /*
            S.listItem()
                .title("Makers Space Years")
                .icon(CalendarIcon)
                .child(S.documentTypeList("makersSpaceYears").title("Makers Space years")),
                */
            S.divider(),

            S.listItem()
                .title("Footer") 
                .icon(BookmarkIcon)
                .child(S.editor()
                    .id('footer')
                    .schemaType('footer')
                    .documentId('79d9b23d-556c-44a3-9d40-0c783ef78228')
            ),
            S.divider(),

            S.listItem()
                .title('Documents')
                .child(
                    S.list()
                        .title('All documents')
                        .items(S.documentTypeListItems().filter(
                        (listItem) => allDocs.includes(listItem.getId())
                    )
                ) 
            )
])
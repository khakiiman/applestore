// packages and types
import {user, account} from 'next-auth-sanity/schemas'
// We import object and document schemas
import blockContent from './blockContent'
import product from './product'
import category from './category'
import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'

export const schemaTypes = [
  // The following are document types which will
  // appear in the studio.
  product,
  category,
  blockContent,
  localeText,
  localeBlockContent,
  localeString,
  user,
  account,
]

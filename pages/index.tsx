import { DrawerListItem, Layout } from '../lib'

const Index = () => (
  <Layout
    drawerTitle="odc-ui"
    drawerSubtitle="React components"
    drawerContent={<DrawerListItem text="People" />}
    topAppBarTitle="odc-ui"
  />
)

export default Index

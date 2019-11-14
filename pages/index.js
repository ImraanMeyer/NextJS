import Layout from '../components/Layout';

const Index = () => (
    <Layout>
        <div>
            <h1>Home</h1>

            <img src="/typing.gif" alt="kermit" />
        </div>

        <style jsx>{`
            div {
                height: 90vh;
                background: mistyrose;
            }
        `}</style>
    </Layout>
)

export default Index;
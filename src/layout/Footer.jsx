function Footer() {
    return (
        <footer className='page-footer blue accent-3'>
            <div className='footer-copyright'>
                <div className='container'>
                    <span>
                        © {new Date().getFullYear()} React Movies Project
                    </span>
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://KabanovN.github.io/react-movies'
                        target='_blank'
                        rel='noreferrer'>
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

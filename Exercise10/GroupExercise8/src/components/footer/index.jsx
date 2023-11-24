const Footer = (props) => {
    // Menggunakan props di dalam komponen
    const { text } = props;

    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

export default Footer;

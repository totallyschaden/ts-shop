import React from 'react';
import '../pages/CartPage.css'; // Reuse container styles

const Datenschutz = () => {
    return (
        <div className="cart-page container" style={{ paddingTop: '120px', paddingBottom: '80px', textAlign: 'left', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--accent-color)' }}>Datenschutzerklärung</h1>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>1. Allgemeine Hinweise</h2>
                <p>Der Schutz deiner persönlichen Daten ist uns ein wichtiges Anliegen. In dieser Datenschutzerklärung informieren wir dich darüber, welche personenbezogenen Daten auf der Website TotallySchaden erhoben, verarbeitet und genutzt werden.</p>
                <p>Diese Website richtet sich ausschliesslich an volljährige Personen (18+).</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>2. Verantwortliche Stelle</h2>
                <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                <p>TotallySchaden<br />(E-Mail-Adresse oder Kontaktmöglichkeit hier einfügen)</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>3. Erhebung und Verarbeitung personenbezogener Daten</h2>
                <p>Wir verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb der Website und die Abwicklung von Bestellungen erforderlich ist.</p>
                <p>Dabei können insbesondere folgende Daten verarbeitet werden:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ccc' }}>
                    <li>E-Mail-Adresse</li>
                    <li>Zahlungs- und Transaktionsinformationen</li>
                    <li>technische Zugriffsdaten (z. B. IP-Adresse, Browsertyp)</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>4. Zahlungsabwicklung</h2>
                <p>Die Zahlungsabwicklung erfolgt über den externen Zahlungsdienstleister Stripe.</p>
                <p>Dabei werden die für den Zahlungsvorgang notwendigen Daten direkt an Stripe übermittelt.</p>
                <p>Wir haben keinen Zugriff auf vollständige Zahlungsdaten wie Kreditkartennummern.</p>
                <p>Stripe verarbeitet Daten gemäss den eigenen Datenschutzbestimmungen.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>5. Hosting</h2>
                <p>Diese Website wird bei einem externen Hosting-Anbieter betrieben (z. B. Vercel).</p>
                <p>Beim Aufruf der Website können technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt des Zugriffs) automatisch erfasst werden, um einen sicheren und stabilen Betrieb zu gewährleisten.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>6. Cookies</h2>
                <p>Diese Website kann Cookies verwenden, die für den Betrieb und die Zahlungsabwicklung notwendig sind.</p>
                <p>Cookies dienen dazu, die Benutzerfreundlichkeit und Sicherheit der Website zu gewährleisten. Du kannst die Verwendung von Cookies in den Einstellungen deines Browsers einschränken oder deaktivieren.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>7. Verwendung der Inhalte</h2>
                <p>Die Inhalte der Website dienen ausschliesslich der Unterhaltung.</p>
                <p>Die Teilnahme an Trinkspielen erfolgt freiwillig und auf eigene Verantwortung.</p>
                <p>Der Anbieter übernimmt keine Haftung für Folgen, die aus dem Konsum von Alkohol entstehen.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>8. Weitergabe von Daten</h2>
                <p>Personenbezogene Daten werden nicht an Dritte weitergegeben, ausser:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ccc' }}>
                    <li>zur Zahlungsabwicklung über Stripe</li>
                    <li>wenn wir gesetzlich dazu verpflichtet sind</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>9. Aufbewahrungsdauer</h2>
                <p>Personenbezogene Daten werden nur so lange gespeichert, wie dies für die Erfüllung der genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>10. Rechte der betroffenen Personen</h2>
                <p>Du hast jederzeit das Recht auf:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ccc' }}>
                    <li>Auskunft über deine gespeicherten Daten</li>
                    <li>Berichtigung unrichtiger Daten</li>
                    <li>Löschung deiner Daten, soweit keine gesetzliche Pflicht entgegensteht</li>
                </ul>
                <p>Anfragen kannst du jederzeit per E-Mail an uns richten.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>11. Änderungen</h2>
                <p>Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen. Es gilt die jeweils aktuelle Version auf dieser Website.</p>
            </section>
        </div>
    );
};

export default Datenschutz;

import React from 'react';
import '../pages/CartPage.css'; // Reuse container styles

const AGB = () => {
    return (
        <div className="cart-page container" style={{ paddingTop: '120px', paddingBottom: '80px', textAlign: 'left', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--accent-color)' }}>Allgemeine Geschäftsbedingungen (AGB)</h1>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>1. Geltungsbereich</h2>
                <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Bestellungen und die Nutzung der Website totallyschaden (nachfolgend „Anbieter“) durch Kundinnen und Kunden.</p>
                <p>Mit der Nutzung der Website bzw. der Bestellung eines Produkts erklärst du dich mit diesen AGB einverstanden.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>2. Angebot und Vertragsabschluss</h2>
                <p>Die Darstellung der Produkte auf der Website stellt kein rechtlich bindendes Angebot dar, sondern eine unverbindliche Aufforderung zur Bestellung.</p>
                <p>Ein Vertrag kommt zustande, sobald der Anbieter die Bestellung per E-Mail bestätigt oder das Produkt digital zur Verfügung stellt.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>3. Preise und Zahlung</h2>
                <p>Alle Preise sind in Schweizer Franken (CHF) angegeben.</p>
                <p>Die Zahlung erfolgt über den externen Zahlungsdienstleister Stripe. Dabei stehen je nach Verfügbarkeit verschiedene Zahlungsmethoden (z. B. Kreditkarte, TWINT) zur Verfügung.</p>
                <p>Der Anbieter speichert keine Zahlungsdaten. Die Zahlungsabwicklung erfolgt ausschliesslich über Stripe.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>4. Lieferung</h2>
                <p>Digitale Produkte werden nach erfolgreichem Zahlungseingang elektronisch bereitgestellt (z. B. Download oder Anzeige auf der Website).</p>
                <p>Physische Produkte (falls angeboten) werden an die vom Kunden angegebene Adresse geliefert.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>5. Kein Rückgaberecht bei digitalen Inhalten</h2>
                <p>Bei digitalen Produkten besteht kein Widerrufs- oder Rückgaberecht, sobald mit der Ausführung des Vertrags begonnen wurde (z. B. Download oder Zugriff).</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>6. Nutzung und Verantwortung</h2>
                <p>Die Inhalte und Spiele von totallyschaden dienen ausschliesslich der Unterhaltung.</p>
                <p>Die Teilnahme an Trinkspielen erfolgt freiwillig und auf eigene Verantwortung. Der Anbieter übernimmt keine Haftung für gesundheitliche, rechtliche oder sonstige Folgen, die aus dem Konsum von Alkohol entstehen.</p>
                <p>Die Teilnahme ist ausschliesslich für volljährige Personen (18+) vorgesehen.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>7. Haftung</h2>
                <p>Der Anbieter haftet nur für Schäden, die durch vorsätzliches oder grob fahrlässiges Verhalten verursacht wurden.</p>
                <p>Eine Haftung für indirekte Schäden, Folgeschäden oder entgangenen Gewinn wird ausgeschlossen, soweit gesetzlich zulässig.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>8. Urheberrecht</h2>
                <p>Alle Inhalte, Texte, Grafiken und Spielkonzepte auf dieser Website sind urheberrechtlich geschützt.</p>
                <p>Eine Vervielfältigung, Weitergabe oder kommerzielle Nutzung ohne ausdrückliche Zustimmung des Anbieters ist nicht gestattet.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>9. Datenschutz</h2>
                <p>Informationen zur Verarbeitung personenbezogener Daten sind in der Datenschutzerklärung auf der Website geregelt.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>10. Änderungen der AGB</h2>
                <p>Der Anbieter behält sich das Recht vor, diese AGB jederzeit zu ändern. Es gilt jeweils die zum Zeitpunkt der Bestellung gültige Version.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>11. Anwendbares Recht und Gerichtsstand</h2>
                <p>Es gilt Schweizer Recht.</p>
                <p>Gerichtsstand ist der Sitz des Anbieters, soweit keine zwingenden gesetzlichen Bestimmungen entgegenstehen.</p>
            </section>
        </div>
    );
};

export default AGB;

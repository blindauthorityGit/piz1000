import { useEffect, useState } from "react";

import Head from "next/head";

import Breadcrumbs from "../components/Breadcrumbs";
import client from "../client";

import { Logos1 } from "../components/logos";
import { PortableText } from "@portabletext/react";

export default function Besucher({}) {
    const [linkList, setLinkList] = useState([
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Datenschutz",
            link: "/datenschutz",
        },
    ]);

    return (
        <>
            <Head>
                <title>PIZ 1000 - Impressum</title>
            </Head>

            <Breadcrumbs links={linkList}></Breadcrumbs>
            <div className="container m-auto px-8 datenschutz">
                <h1 className="adsimple-112400130 text-4xl font-oswald mb-8">Datenschutzerklärung</h1>
                <h2 id="einleitung-ueberblick" className="adsimple-112400130  text-2xl mb-6">
                    Einleitung und Überblick
                </h2>
                <p>
                    Wir haben diese Datenschutzerklärung (Fassung 01.02.2023-112400130) verfasst, um Ihnen gemäß der
                    Vorgaben der{" "}
                    <a
                        className="adsimple-112400130"
                        href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=112400130#d1e2269-1-1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Datenschutz-Grundverordnung (EU) 2016/679
                    </a>{" "}
                    und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als
                    Verantwortliche &#8211; und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) &#8211;
                    verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben. Die
                    verwendeten Begriffe sind geschlechtsneutral zu verstehen.
                    <br />
                    <strong className="adsimple-112400130">Kurz gesagt:</strong> Wir informieren Sie umfassend über
                    Daten, die wir über Sie verarbeiten.
                </p>
                <p>
                    Datenschutzerklärungen klingen für gewöhnlich sehr technisch und verwenden juristische Fachbegriffe.
                    Diese Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie
                    möglich beschreiben. Soweit es der Transparenz förderlich ist, werden technische{" "}
                    <strong className="adsimple-112400130">Begriffe leserfreundlich erklärt</strong>, Links zu
                    weiterführenden Informationen geboten und <strong className="adsimple-112400130">Grafiken</strong>{" "}
                    zum Einsatz gebracht. Wir informieren damit in klarer und einfacher Sprache, dass wir im Rahmen
                    unserer Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine entsprechende
                    gesetzliche Grundlage gegeben ist. Das ist sicher nicht möglich, wenn man möglichst knappe, unklare
                    und juristisch-technische Erklärungen abgibt, so wie sie im Internet oft Standard sind, wenn es um
                    Datenschutz geht. Ich hoffe, Sie finden die folgenden Erläuterungen interessant und informativ und
                    vielleicht ist die eine oder andere Information dabei, die Sie noch nicht kannten.
                    <br />
                    Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw. im Impressum genannte
                    verantwortliche Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere Informationen auf
                    Drittseiten anzusehen. Unsere Kontaktdaten finden Sie selbstverständlich auch im Impressum.
                </p>
                <h2 id="anwendungsbereich" className="adsimple-112400130">
                    Anwendungsbereich
                </h2>
                <p>
                    Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen
                    Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter)
                    verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO
                    wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person. Die Verarbeitung
                    personenbezogener Daten sorgt dafür, dass wir unsere Dienstleistungen und Produkte anbieten und
                    abrechnen können, sei es online oder offline. Der Anwendungsbereich dieser Datenschutzerklärung
                    umfasst:
                </p>
                <ul className="adsimple-112400130">
                    <li className="adsimple-112400130">
                        alle Onlineauftritte (Websites, Onlineshops), die wir betreiben
                    </li>
                    <li className="adsimple-112400130">Social Media Auftritte und E-Mail-Kommunikation</li>
                    <li className="adsimple-112400130">mobile Apps für Smartphones und andere Geräte</li>
                </ul>
                <p>
                    <strong className="adsimple-112400130">Kurz gesagt:</strong> Die Datenschutzerklärung gilt für alle
                    Bereiche, in denen personenbezogene Daten im Unternehmen über die genannten Kanäle strukturiert
                    verarbeitet werden. Sollten wir außerhalb dieser Kanäle mit Ihnen in Rechtsbeziehungen eintreten,
                    werden wir Sie gegebenenfalls gesondert informieren.
                </p>
                <h2 id="rechtsgrundlagen" className="adsimple-112400130">
                    Rechtsgrundlagen
                </h2>
                <p>
                    In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen
                    Grundsätzen und Vorschriften, also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns
                    ermöglichen, personenbezogene Daten zu verarbeiten.
                    <br />
                    Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN
                    PARLAMENTS UND DES RATES vom 27. April 2016. Diese Datenschutz-Grundverordnung der EU können Sie
                    selbstverständlich online auf EUR-Lex, dem Zugang zum EU-Recht, unter{" "}
                    <a
                        className="adsimple-112400130"
                        href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679"
                    >
                        https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679
                    </a>{" "}
                    nachlesen.
                </p>
                <p>Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:</p>
                <ol>
                    <li className="adsimple-112400130">
                        <strong className="adsimple-112400130">Einwilligung</strong> (Artikel 6 Absatz 1 lit. a DSGVO):
                        Sie haben uns Ihre Einwilligung gegeben, Daten zu einem bestimmten Zweck zu verarbeiten. Ein
                        Beispiel wäre die Speicherung Ihrer eingegebenen Daten eines Kontaktformulars.
                    </li>
                    <li className="adsimple-112400130">
                        <strong className="adsimple-112400130">Vertrag</strong> (Artikel 6 Absatz 1 lit. b DSGVO): Um
                        einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu erfüllen, verarbeiten wir Ihre
                        Daten. Wenn wir zum Beispiel einen Kaufvertrag mit Ihnen abschließen, benötigen wir vorab
                        personenbezogene Informationen.
                    </li>
                    <li className="adsimple-112400130">
                        <strong className="adsimple-112400130">Rechtliche Verpflichtung</strong> (Artikel 6 Absatz 1
                        lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung unterliegen, verarbeiten wir Ihre Daten.
                        Zum Beispiel sind wir gesetzlich verpflichtet Rechnungen für die Buchhaltung aufzuheben. Diese
                        enthalten in der Regel personenbezogene Daten.
                    </li>
                    <li className="adsimple-112400130">
                        <strong className="adsimple-112400130">Berechtigte Interessen</strong> (Artikel 6 Absatz 1 lit.
                        f DSGVO): Im Falle berechtigter Interessen, die Ihre Grundrechte nicht einschränken, behalten
                        wir uns die Verarbeitung personenbezogener Daten vor. Wir müssen zum Beispiel gewisse Daten
                        verarbeiten, um unsere Website sicher und wirtschaftlich effizient betreiben zu können. Diese
                        Verarbeitung ist somit ein berechtigtes Interesse.
                    </li>
                </ol>
                <p>
                    Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im öffentlichen Interesse und Ausübung
                    öffentlicher Gewalt sowie dem Schutz lebenswichtiger Interessen treten bei uns in der Regel nicht
                    auf. Soweit eine solche Rechtsgrundlage doch einschlägig sein sollte, wird diese an der
                    entsprechenden Stelle ausgewiesen.
                </p>
                <p>Zusätzlich zu der EU-Verordnung gelten auch noch nationale Gesetze:</p>
                <ul className="adsimple-112400130">
                    <li className="adsimple-112400130">
                        In <strong className="adsimple-112400130">Österreich</strong> ist dies das Bundesgesetz zum
                        Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten (
                        <strong className="adsimple-112400130">Datenschutzgesetz</strong>), kurz{" "}
                        <strong className="adsimple-112400130">DSG</strong>.
                    </li>
                    <li className="adsimple-112400130">
                        In <strong className="adsimple-112400130">Deutschland</strong> gilt das{" "}
                        <strong className="adsimple-112400130">Bundesdatenschutzgesetz</strong>, kurz
                        <strong className="adsimple-112400130"> BDSG</strong>.
                    </li>
                </ul>
                <p>
                    Sofern weitere regionale oder nationale Gesetze zur Anwendung kommen, informieren wir Sie in den
                    folgenden Abschnitten darüber.
                </p>
                <h2 id="kontaktdaten-verantwortliche" className="adsimple-112400130">
                    Kontaktdaten des Verantwortlichen
                </h2>
                <p>
                    Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben, finden Sie
                    nachfolgend die Kontaktdaten der verantwortlichen Person bzw. Stelle:
                    <br />
                    <span className="adsimple-112400130" style={{ fontWeight: "400" }}>
                        Marktgemeinde Pitten
                        <br />
                    </span>
                    Marktplatz 1<br />A - 2823 Pitten
                </p>
                <p>
                    Tel: +43 2627 82212
                    <br />
                    Fax: +43 2627 82212-32
                    <br />
                    E-mail: gemeinde@pitten.at
                </p>
                <p>
                    E-Mail: <a href="mailto:piz1000@pittenm.at">piz1000@pittenm.at</a>
                    <br />
                    Telefon: <a href="tel:+43 2627 82212">+43 2627 82212</a>
                    <br />
                    Impressum: <a href="https://www.piz1000.at/impressum/">https://www.piz1000.at/impressum/</a>
                </p>
                <h2 id="speicherdauer" className="adsimple-112400130">
                    Speicherdauer
                </h2>
                <p>
                    Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer
                    Dienstleistungen und Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns. Das
                    bedeutet, dass wir personenbezogene Daten löschen, sobald der Grund für die Datenverarbeitung nicht
                    mehr vorhanden ist. In einigen Fällen sind wir gesetzlich dazu verpflichtet, bestimmte Daten auch
                    nach Wegfall des ursprüngliches Zwecks zu speichern, zum Beispiel zu Zwecken der Buchführung.
                </p>
                <p>
                    Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung
                    widerrufen, werden die Daten so rasch wie möglich und soweit keine Pflicht zur Speicherung besteht,
                    gelöscht.
                </p>
                <p>
                    Über die konkrete Dauer der jeweiligen Datenverarbeitung informieren wir Sie weiter unten, sofern
                    wir weitere Informationen dazu haben.
                </p>
                <h2 id="rechte-dsgvo" className="adsimple-112400130">
                    Rechte laut Datenschutz-Grundverordnung
                </h2>
                <p>
                    Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden Rechte, die Ihnen zustehen, damit
                    es zu einer fairen und transparenten Verarbeitung von Daten kommt:
                </p>
                <ul className="adsimple-112400130">
                    <li className="adsimple-112400130">
                        Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von Ihnen verarbeiten.
                        Sollte das zutreffen, haben Sie Recht darauf eine Kopie der Daten zu erhalten und die folgenden
                        Informationen zu erfahren:
                        <ul className="adsimple-112400130">
                            <li className="adsimple-112400130">zu welchem Zweck wir die Verarbeitung durchführen;</li>
                            <li className="adsimple-112400130">
                                die Kategorien, also die Arten von Daten, die verarbeitet werden;
                            </li>
                            <li className="adsimple-112400130">
                                wer diese Daten erhält und wenn die Daten an Drittländer übermittelt werden, wie die
                                Sicherheit garantiert werden kann;
                            </li>
                            <li className="adsimple-112400130">wie lange die Daten gespeichert werden;</li>
                            <li className="adsimple-112400130">
                                das Bestehen des Rechts auf Berichtigung, Löschung oder Einschränkung der Verarbeitung
                                und dem Widerspruchsrecht gegen die Verarbeitung;
                            </li>
                            <li className="adsimple-112400130">
                                dass Sie sich bei einer Aufsichtsbehörde beschweren können (Links zu diesen Behörden
                                finden Sie weiter unten);
                            </li>
                            <li className="adsimple-112400130">
                                die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben haben;
                            </li>
                            <li className="adsimple-112400130">
                                ob Profiling durchgeführt wird, ob also Daten automatisch ausgewertet werden, um zu
                                einem persönlichen Profil von Ihnen zu gelangen.
                            </li>
                        </ul>
                    </li>
                    <li className="adsimple-112400130">
                        Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten, was bedeutet, dass wir
                        Daten richtig stellen müssen, falls Sie Fehler finden.
                    </li>
                    <li className="adsimple-112400130">
                        Sie haben laut Artikel 17 DSGVO das Recht auf Löschung („Recht auf Vergessenwerden“), was
                        konkret bedeutet, dass Sie die Löschung Ihrer Daten verlangen dürfen.
                    </li>
                    <li className="adsimple-112400130">
                        Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der Verarbeitung, was bedeutet, dass
                        wir die Daten nur mehr speichern dürfen aber nicht weiter verwenden.
                    </li>
                    <li className="adsimple-112400130">
                        Sie haben laut Artikel 20 DSGVO das Recht auf Datenübertragbarkeit, was bedeutet, dass wir Ihnen
                        auf Anfrage Ihre Daten in einem gängigen Format zur Verfügung stellen.
                    </li>
                    <li className="adsimple-112400130">
                        Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine Änderung
                        der Verarbeitung mit sich bringt.
                        <ul className="adsimple-112400130">
                            <li className="adsimple-112400130">
                                Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e (öffentliches Interesse,
                                Ausübung öffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse)
                                basiert, können Sie gegen die Verarbeitung Widerspruch einlegen. Wir prüfen danach so
                                rasch wie möglich, ob wir diesem Widerspruch rechtlich nachkommen können.
                            </li>
                            <li className="adsimple-112400130">
                                Werden Daten verwendet, um Direktwerbung zu betreiben, können Sie jederzeit gegen diese
                                Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für
                                Direktmarketing verwenden.
                            </li>
                            <li className="adsimple-112400130">
                                Werden Daten verwendet, um Profiling zu betreiben, können Sie jederzeit gegen diese Art
                                der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für
                                Profiling verwenden.
                            </li>
                        </ul>
                    </li>
                    <li className="adsimple-112400130">
                        Sie haben laut Artikel 22 DSGVO unter Umständen das Recht, nicht einer ausschließlich auf einer
                        automatisierten Verarbeitung (zum Beispiel Profiling) beruhenden Entscheidung unterworfen zu
                        werden.
                    </li>
                    <li className="adsimple-112400130">
                        Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das heißt, Sie können sich jederzeit
                        bei der Datenschutzbehörde beschweren, wenn Sie der Meinung sind, dass die Datenverarbeitung von
                        personenbezogenen Daten gegen die DSGVO verstößt.
                    </li>
                </ul>
                <p>
                    <strong className="adsimple-112400130">Kurz gesagt:</strong> Sie haben Rechte &#8211; zögern Sie
                    nicht, die oben gelistete verantwortliche Stelle bei uns zu kontaktieren!
                </p>
                <p>
                    Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre
                    datenschutzrechtlichen Ansprüche in sonst einer Weise verletzt worden sind, können Sie sich bei der
                    Aufsichtsbehörde beschweren. Diese ist für Österreich die Datenschutzbehörde, deren Website Sie
                    unter{" "}
                    <a
                        className="adsimple-112400130"
                        href="https://www.dsb.gv.at/?tid=112400130"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://www.dsb.gv.at/
                    </a>{" "}
                    finden. In Deutschland gibt es für jedes Bundesland einen Datenschutzbeauftragten. Für nähere
                    Informationen können Sie sich an die{" "}
                    <a
                        className="adsimple-112400130"
                        href="https://www.bfdi.bund.de/DE/Home/home_node.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)
                    </a>{" "}
                    wenden. Für unser Unternehmen ist die folgende lokale Datenschutzbehörde zuständig:
                </p>
                <h2 id="oesterreich-datenschutzbehoerde" className="adsimple-112400130">
                    Österreich Datenschutzbehörde
                </h2>
                <p>
                    <strong className="adsimple-112400130">Leiterin: </strong>Mag. Dr. Andrea Jelinek
                    <strong className="adsimple-112400130">
                        <br />
                        Adresse:{" "}
                    </strong>
                    Barichgasse 40-42, 1030 Wien
                    <strong className="adsimple-112400130">
                        <br />
                        Telefonnr.:{" "}
                    </strong>
                    +43 1 52 152-0
                    <strong className="adsimple-112400130">
                        <br />
                        E-Mail-Adresse:{" "}
                    </strong>
                    <a className="adsimple-112400130" href="mailto:dsb@dsb.gv.at" target="_blank" rel="noreferrer">
                        dsb@dsb.gv.at
                    </a>
                    <strong className="adsimple-112400130">
                        <br />
                        Website:{" "}
                    </strong>
                    <a className="adsimple-112400130" href="https://www.dsb.gv.at/" target="_blank" rel="noreferrer">
                        https://www.dsb.gv.at/
                    </a>
                </p>
                <h2 id="sicherheit-datenverarbeitung" className="adsimple-112400130">
                    Sicherheit der Datenverarbeitung
                </h2>
                <p>
                    Um personenbezogene Daten zu schützen, haben wir sowohl technische als auch organisatorische
                    Maßnahmen umgesetzt. Wo es uns möglich ist, verschlüsseln oder pseudonymisieren wir personenbezogene
                    Daten. Dadurch machen wir es im Rahmen unserer Möglichkeiten so schwer wie möglich, dass Dritte aus
                    unseren Daten auf persönliche Informationen schließen können.
                </p>
                <p>
                    Art. 25 DSGVO spricht hier von &#8220;Datenschutz durch Technikgestaltung und durch
                    datenschutzfreundliche Voreinstellungen&#8221; und meint damit, dass man sowohl bei Software (z. B.
                    Formularen) also auch Hardware (z. B. Zugang zum Serverraum) immer an Sicherheit denkt und
                    entsprechende Maßnahmen setzt. Im Folgenden gehen wir, falls erforderlich, noch auf konkrete
                    Maßnahmen ein.
                </p>
                <h2 id="tls-verschluesselung-https" className="adsimple-112400130">
                    TLS-Verschlüsselung mit https
                </h2>
                <p>
                    TLS, Verschlüsselung und https klingen sehr technisch und sind es auch. Wir verwenden HTTPS (das
                    Hypertext Transfer Protocol Secure steht für „sicheres Hypertext-Übertragungsprotokoll“), um Daten
                    abhörsicher im Internet zu übertragen.
                    <br />
                    Das bedeutet, dass die komplette Übertragung aller Daten von Ihrem Browser zu unserem Webserver
                    abgesichert ist &#8211; niemand kann &#8220;mithören&#8221;.
                </p>
                <p>
                    Damit haben wir eine zusätzliche Sicherheitsschicht eingeführt und erfüllen den Datenschutz durch
                    Technikgestaltung (
                    <a
                        className="adsimple-112400130"
                        href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=112400130"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Artikel 25 Absatz 1 DSGVO
                    </a>
                    ). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur
                    sicheren Datenübertragung im Internet, können wir den Schutz vertraulicher Daten sicherstellen.
                    <br />
                    Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schlosssymbol{" "}
                    <img
                        role="img"
                        src="https://www.adsimple.at/wp-content/uploads/2018/03/schlosssymbol-https.svg"
                        width="17"
                        height="18"
                    />{" "}
                    links oben im Browser, links von der Internetadresse (z. B. beispielseite.de) und der Verwendung des
                    Schemas https (anstatt http) als Teil unserer Internetadresse.
                    <br />
                    Wenn Sie mehr zum Thema Verschlüsselung wissen möchten, empfehlen wir die Google Suche nach
                    &#8220;Hypertext Transfer Protocol Secure wiki&#8221; um gute Links zu weiterführenden Informationen
                    zu erhalten.
                </p>
                <h2 id="cookies" className="adsimple-112400130">
                    Cookies
                </h2>
                <table border="1" cellPadding="15">
                    <tbody>
                        <tr>
                            <td>
                                <strong className="adsimple-112400130">Cookies Zusammenfassung</strong>
                                <br />
                                &#x1f465; Betroffene: Besucher der Website
                                <br />
                                &#x1f91d; Zweck: abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter
                                unten bzw. beim Hersteller der Software, der das Cookie setzt.
                                <br />
                                &#x1f4d3; Verarbeitete Daten: Abhängig vom jeweils eingesetzten Cookie. Mehr Details
                                dazu finden Sie weiter unten bzw. beim Hersteller der Software, der das Cookie setzt.
                                <br />
                                &#x1f4c5; Speicherdauer: abhängig vom jeweiligen Cookie, kann von Stunden bis hin zu
                                Jahren variieren
                                <br />
                                &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6
                                Abs. 1 lit.f DSGVO (Berechtigte Interessen)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3 className="adsimple-112400130">Was sind Cookies?</h3>
                <p>
                    Unsere Website verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern.
                    <br />
                    Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende
                    Datenschutzerklärung besser verstehen.
                </p>
                <p>
                    Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind
                    beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Websites
                    speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.
                </p>
                <p>
                    Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Websites
                    verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für
                    andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem
                    Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem
                    &#8220;Hirn&#8221; Ihres Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert.
                    Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.
                </p>
                <p>
                    Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche
                    Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die
                    „userbezogenen“ Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Website, wer Sie
                    sind und bietet Ihnen die Einstellung, die Sie gewohnt sind. In einigen Browsern hat jedes Cookie
                    eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer einzigen Datei
                    gespeichert.
                </p>
                <p>
                    Die folgende Grafik zeigt eine mögliche Interaktion zwischen einem Webbrowser wie z. B. Chrome und
                    dem Webserver. Dabei fordert der Webbrowser eine Website an und erhält vom Server ein Cookie zurück,
                    welches der Browser erneut verwendet, sobald eine andere Seite angefordert wird.
                </p>
                <p>
                    <img
                        role="img"
                        src="https://www.adsimple.at/wp-content/uploads/2018/03/http-cookie-interaction.svg"
                        alt="HTTP Cookie Interaktion zwischen Browser und Webserver"
                        width="100%"
                    />
                </p>
                <p>
                    Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden
                    direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Websites (z.B. Google
                    Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten
                    speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar
                    Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder andere
                    „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs zugreifen.
                </p>
                <p>So können zum Beispiel Cookie-Daten aussehen:</p>
                <p>
                    <strong className="adsimple-112400130">Name:</strong> _ga
                    <br />
                    <strong className="adsimple-112400130">Wert:</strong> GA1.2.1326744211.152112400130-9
                    <br />
                    <strong className="adsimple-112400130">Verwendungszweck:</strong> Unterscheidung der Websitebesucher
                    <br />
                    <strong className="adsimple-112400130">Ablaufdatum:</strong> nach 2 Jahren
                </p>
                <p>Diese Mindestgrößen sollte ein Browser unterstützen können:</p>
                <ul className="adsimple-112400130">
                    <li className="adsimple-112400130">Mindestens 4096 Bytes pro Cookie</li>
                    <li className="adsimple-112400130">Mindestens 50 Cookies pro Domain</li>
                    <li className="adsimple-112400130">Mindestens 3000 Cookies insgesamt</li>
                </ul>
                <h3 className="adsimple-112400130">Welche Arten von Cookies gibt es?</h3>
                <p>
                    Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird
                    in den folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf
                    die verschiedenen Arten von HTTP-Cookies eingehen.
                </p>
                <p>Man kann 4 Arten von Cookies unterscheiden:</p>
                <p>
                    <strong className="adsimple-112400130">
                        Unerlässliche Cookies
                        <br />
                    </strong>
                    Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel
                    braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten
                    weitersurft und später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gelöscht,
                    selbst wenn der User sein Browserfenster schließt.
                </p>
                <p>
                    <strong className="adsimple-112400130">
                        Zweckmäßige Cookies
                        <br />
                    </strong>
                    Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen bekommt.
                    Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website bei
                    verschiedenen Browsern gemessen.
                </p>
                <p>
                    <strong className="adsimple-112400130">
                        Zielorientierte Cookies
                        <br />
                    </strong>
                    Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene
                    Standorte, Schriftgrößen oder Formulardaten gespeichert.
                </p>
                <p>
                    <strong className="adsimple-112400130">
                        Werbe-Cookies
                        <br />
                    </strong>
                    Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste
                    Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.
                </p>
                <p>
                    Üblicherweise werden Sie beim erstmaligen Besuch einer Website gefragt, welche dieser Cookiearten
                    Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.
                </p>
                <p>
                    Wenn Sie mehr über Cookies wissen möchten und technische Dokumentationen nicht scheuen, empfehlen
                    wir{" "}
                    <a className="adsimple-112400130" href="https://datatracker.ietf.org/doc/html/rfc6265">
                        https://datatracker.ietf.org/doc/html/rfc6265
                    </a>
                    , dem Request for Comments der Internet Engineering Task Force (IETF) namens &#8220;HTTP State
                    Management Mechanism&#8221;.
                </p>
                <h3 className="adsimple-112400130">Zweck der Verarbeitung über Cookies</h3>
                <p>
                    Der Zweck ist letztendlich abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter unten
                    bzw. beim Hersteller der Software, die das Cookie setzt.
                </p>
                <h3 className="adsimple-112400130">Welche Daten werden verarbeitet?</h3>
                <p>
                    Cookies sind kleine Gehilfen für eine viele verschiedene Aufgaben. Welche Daten in Cookies
                    gespeichert werden, kann man leider nicht verallgemeinern, aber wir werden Sie im Rahmen der
                    folgenden Datenschutzerklärung über die verarbeiteten bzw. gespeicherten Daten informieren.
                </p>
                <h3 className="adsimple-112400130">Speicherdauer von Cookies</h3>
                <p>
                    Die Speicherdauer hängt vom jeweiligen Cookie ab und wird weiter unter präzisiert. Manche Cookies
                    werden nach weniger als einer Stunde gelöscht, andere können mehrere Jahre auf einem Computer
                    gespeichert bleiben.
                </p>
                <p>
                    Sie haben außerdem selbst Einfluss auf die Speicherdauer. Sie können über ihren Browser sämtliche
                    Cookies jederzeit manuell löschen (siehe auch unten &#8220;Widerspruchsrecht&#8221;). Ferner werden
                    Cookies, die auf einer Einwilligung beruhen, spätestens nach Widerruf Ihrer Einwilligung gelöscht,
                    wobei die Rechtmäßigkeit der Speicherung bis dahin unberührt bleibt.
                </p>
                <h3 className="adsimple-112400130">Widerspruchsrecht &#8211; wie kann ich Cookies löschen?</h3>
                <p>
                    Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder
                    welcher Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, zu
                    deaktivieren oder nur teilweise zuzulassen. Zum Beispiel können Sie Cookies von Drittanbietern
                    blockieren, aber alle anderen Cookies zulassen.
                </p>
                <p>
                    Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie
                    Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen
                    finden:
                </p>
                <p>
                    <a
                        className="adsimple-112400130"
                        href="https://support.google.com/chrome/answer/95647?tid=112400130"
                        target="_blank"
                        rel="noreferrer noreferrer"
                    >
                        Chrome: Cookies in Chrome löschen, aktivieren und verwalten
                    </a>
                </p>
                <p>
                    <a
                        className="adsimple-112400130"
                        href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=112400130"
                        target="_blank"
                        rel="noreferrer noreferrer"
                    >
                        Safari: Verwalten von Cookies und Websitedaten mit Safari
                    </a>
                </p>
                <p>
                    <a
                        className="adsimple-112400130"
                        href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=112400130"
                        target="_blank"
                        rel="noreferrer noreferrer"
                    >
                        Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben
                    </a>
                </p>
                <p>
                    <a
                        className="adsimple-112400130"
                        href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d?tid=112400130"
                    >
                        Internet Explorer: Löschen und Verwalten von Cookies
                    </a>
                </p>
                <p>
                    <a
                        className="adsimple-112400130"
                        href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09?tid=112400130"
                    >
                        Microsoft Edge: Löschen und Verwalten von Cookies
                    </a>
                </p>
                <p>
                    Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er
                    Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie
                    entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser
                    verschieden. Am besten Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies löschen
                    Chrome” oder &#8220;Cookies deaktivieren Chrome&#8221; im Falle eines Chrome Browsers.
                </p>
                <h3 className="adsimple-112400130">Rechtsgrundlage</h3>
                <p>
                    Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern
                    von Cookies eine <strong className="adsimple-112400130">Einwilligung</strong> (Artikel 6 Abs. 1 lit.
                    a DSGVO) von Ihnen verlangt. Innerhalb der EU-Länder gibt es allerdings noch sehr unterschiedliche
                    Reaktionen auf diese Richtlinien. In Österreich erfolgte aber die Umsetzung dieser Richtlinie in §
                    96 Abs. 3 des Telekommunikationsgesetzes (TKG). In Deutschland wurden die Cookie-Richtlinien nicht
                    als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in §
                    15 Abs.3 des Telemediengesetzes (TMG).
                </p>
                <p>
                    Für unbedingt notwendige Cookies, auch soweit keine Einwilligung vorliegt, bestehen{" "}
                    <strong className="adsimple-112400130">berechtigte Interessen</strong> (Artikel 6 Abs. 1 lit. f
                    DSGVO), die in den meisten Fällen wirtschaftlicher Natur sind. Wir möchten den Besuchern der Website
                    eine angenehme Benutzererfahrung bescheren und dafür sind bestimmte Cookies oft unbedingt notwendig.
                </p>
                <p>
                    Soweit nicht unbedingt erforderliche Cookies zum Einsatz kommen, geschieht dies nur im Falle Ihrer
                    Einwilligung. Rechtsgrundlage ist insoweit Art. 6 Abs. 1 lit. a DSGVO.
                </p>
                <p>
                    In den folgenden Abschnitten werden Sie genauer über den Einsatz von Cookies informiert, sofern
                    eingesetzte Software Cookies verwendet.
                </p>
                <h2 id="webhosting-einleitung" className="adsimple-112400130">
                    Webhosting Einleitung
                </h2>
                <table border="1" cellPadding="15">
                    <tbody>
                        <tr>
                            <td>
                                <strong className="adsimple-112400130">Webhosting Zusammenfassung</strong>
                                <br />
                                &#x1f465; Betroffene: Besucher der Website
                                <br />
                                &#x1f91d; Zweck: professionelles Hosting der Website und Absicherung des Betriebs
                                <br />
                                &#x1f4d3; Verarbeitete Daten: IP-Adresse, Zeitpunkt des Websitebesuchs, verwendeter
                                Browser und weitere Daten. Mehr Details dazu finden Sie weiter unten bzw. beim jeweils
                                eingesetzten Webhosting Provider.
                                <br />
                                &#x1f4c5; Speicherdauer: abhängig vom jeweiligen Provider, aber in der Regel 2 Wochen
                                <br />
                                &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit.f DSGVO (Berechtigte Interessen)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3 className="adsimple-112400130">Was ist Webhosting?</h3>
                <p>
                    Wenn Sie heutzutage Websites besuchen, werden gewisse Informationen &#8211; auch personenbezogene
                    Daten &#8211; automatisch erstellt und gespeichert, so auch auf dieser Website. Diese Daten sollten
                    möglichst sparsam und nur mit Begründung verarbeitet werden. Mit Website meinen wir übrigens die
                    Gesamtheit aller Webseiten auf einer Domain, d.h. alles von der Startseite (Homepage) bis hin zur
                    aller letzten Unterseite (wie dieser hier). Mit Domain meinen wir zum Beispiel beispiel.de oder
                    musterbeispiel.com.
                </p>
                <p>
                    Wenn Sie eine Website auf einem Computer, Tablet oder Smartphone ansehen möchten, verwenden Sie
                    dafür ein Programm, das sich Webbrowser nennt. Sie kennen vermutlich einige Webbrowser beim Namen:
                    Google Chrome, Microsoft Edge, Mozilla Firefox und Apple Safari. Wir sagen kurz Browser oder
                    Webbrowser dazu.
                </p>
                <p>
                    Um die Website anzuzeigen, muss sich der Browser zu einem anderen Computer verbinden, wo der Code
                    der Website gespeichert ist: dem Webserver. Der Betrieb eines Webservers ist eine komplizierte und
                    aufwendige Aufgabe, weswegen dies in der Regel von professionellen Anbietern, den Providern,
                    übernommen wird. Diese bieten Webhosting an und sorgen damit für eine verlässliche und fehlerfreie
                    Speicherung der Daten von Websites. Eine ganze Menge Fachbegriffe, aber bitte bleiben Sie dran, es
                    wird noch besser!
                </p>
                <p>
                    Bei der Verbindungsaufnahme des Browsers auf Ihrem Computer (Desktop, Laptop, Tablet oder
                    Smartphone) und während der Datenübertragung zu und vom Webserver kann es zu einer Verarbeitung
                    personenbezogener Daten kommen. Einerseits speichert Ihr Computer Daten, andererseits muss auch der
                    Webserver Daten eine Zeit lang speichern, um einen ordentlichen Betrieb zu gewährleisten.
                </p>
                <p>
                    Ein Bild sagt mehr als tausend Worte, daher zeigt folgende Grafik zur Veranschaulichung das
                    Zusammenspiel zwischen Browser, dem Internet und dem Hosting-Provider.
                </p>
                <p>
                    <img
                        role="img"
                        src="https://www.adsimple.at/wp-content/uploads/2018/03/browser-und-webserver.svg"
                        alt="Browser und Webserver"
                        width="100%"
                    />
                </p>
                <h3 className="adsimple-112400130">Warum verarbeiten wir personenbezogene Daten?</h3>
                <p>Die Zwecke der Datenverarbeitung sind:</p>
                <ol>
                    <li className="adsimple-112400130">
                        Professionelles Hosting der Website und Absicherung des Betriebs
                    </li>
                    <li className="adsimple-112400130">zur Aufrechterhaltung der Betriebs- und IT-Sicherheit</li>
                    <li className="adsimple-112400130">
                        Anonyme Auswertung des Zugriffsverhaltens zur Verbesserung unseres Angebots und ggf. zur
                        Strafverfolgung bzw. Verfolgung von Ansprüchen
                    </li>
                </ol>
                <h3 className="adsimple-112400130">Welche Daten werden verarbeitet?</h3>
                <p>
                    Auch während Sie unsere Website jetzt gerade besuchen, speichert unser Webserver, das ist der
                    Computer auf dem diese Webseite gespeichert ist, in der Regel automatisch Daten wie
                </p>
                <ul className="adsimple-112400130">
                    <li className="adsimple-112400130">
                        die komplette Internetadresse (URL) der aufgerufenen Webseite
                    </li>
                    <li className="adsimple-112400130">Browser und Browserversion (z. B. Chrome 87)</li>
                    <li className="adsimple-112400130">das verwendete Betriebssystem (z. B. Windows 10)</li>
                    <li className="adsimple-112400130">
                        die Adresse (URL) der zuvor besuchten Seite (Referrer URL) (z. B.{" "}
                        <a
                            className="adsimple-112400130"
                            href="https://www.beispielquellsite.de/vondabinichgekommen/"
                            target="_blank"
                            rel="follow noreferrer"
                        >
                            https://www.beispielquellsite.de/vondabinichgekommen/
                        </a>
                        )
                    </li>
                    <li className="adsimple-112400130">
                        den Hostnamen und die IP-Adresse des Geräts von welchem aus zugegriffen wird (z. B. COMPUTERNAME
                        und 194.23.43.121)
                    </li>
                    <li className="adsimple-112400130">Datum und Uhrzeit</li>
                    <li className="adsimple-112400130">in Dateien, den sogenannten Webserver-Logfiles</li>
                </ul>
                <h3 className="adsimple-112400130">Wie lange werden Daten gespeichert?</h3>
                <p>
                    In der Regel werden die oben genannten Daten zwei Wochen gespeichert und danach automatisch
                    gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten
                    beim Vorliegen von rechtswidrigem Verhalten von Behörden eingesehen werden.
                </p>
                <p>
                    <strong className="adsimple-112400130">Kurz gesagt:</strong> Ihr Besuch wird durch unseren Provider
                    (Firma, die unsere Website auf speziellen Computern (Servern) laufen lässt), protokolliert, aber wir
                    geben Ihre Daten nicht ohne Zustimmung weiter!
                </p>
                <h3 className="adsimple-112400130">Rechtsgrundlage</h3>
                <p>
                    Die Rechtmäßigkeit der Verarbeitung personenbezogener Daten im Rahmen des Webhosting ergibt sich aus
                    Art. 6 Abs. 1 lit. f DSGVO (Wahrung der berechtigten Interessen), denn die Nutzung von
                    professionellem Hosting bei einem Provider ist notwendig, um das Unternehmen im Internet sicher und
                    nutzerfreundlich präsentieren und Angriffe und Forderungen hieraus gegebenenfalls verfolgen zu
                    können.
                </p>
                <p>
                    Zwischen uns und dem Hosting-Provider besteht in der Regel ein Vertrag über die Auftragsverarbeitung
                    gemäß Art. 28 f. DSGVO, der die Einhaltung von Datenschutz gewährleistet und Datensicherheit
                    garantiert.
                </p>
                <h2 id="e-mail-marketing-einleitung" className="adsimple-112400130">
                    E-Mail-Marketing Einleitung
                </h2>
                <table border="1" cellPadding="15">
                    <tbody>
                        <tr>
                            <td>
                                <strong className="adsimple-112400130">E-Mail-Marketing Zusammenfassung</strong>
                                <br />
                                &#x1f465; Betroffene: Newsletter-Abonnenten
                                <br />
                                &#x1f91d; Zweck: Direktwerbung per E-Mail, Benachrichtigung über systemrelevante
                                Ereignisse
                                <br />
                                &#x1f4d3; Verarbeitete Daten: Eingegebene Daten bei der Registrierung jedoch mindestens
                                die E-Mail-Adresse. Mehr Details dazu finden Sie beim jeweils eingesetzten
                                E-Mail-Marketing-Tool.
                                <br />
                                &#x1f4c5; Speicherdauer: Dauer des Bestehens des Abonnements
                                <br />
                                &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6
                                Abs. 1 lit. f DSGVO (berechtigte Interessen)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3 className="adsimple-112400130">Was ist E-Mail-Marketing?</h3>
                <p>
                    Um Sie stets auf dem Laufenden zu halten, nutzen wir auch die Möglichkeit des E-Mail-Marketings.
                    Dabei werden, sofern Sie dem Empfang unserer E-Mails bzw. Newsletter zugestimmt haben, auch Daten
                    von Ihnen verarbeitet und gespeichert. E-Mail-Marketing ist ein Teilbereich des Online-Marketings.
                    Dabei werden Neuigkeiten oder allgemeine Informationen über ein Unternehmen, Produkte oder
                    Dienstleistungen per E-Mail an eine bestimmte Gruppe an Menschen, die sich dafür interessieren,
                    gesendet.
                </p>
                <p>
                    Wenn Sie an unserem E-Mail-Marketing (meist per Newsletter) teilnehmen wollen, müssen Sie sich im
                    Normalfall einfach nur mit Ihrer E-Mail-Adresse anmelden. Dafür füllen Sie ein Online-Formular aus
                    und senden es ab. Es kann aber auch vorkommen, dass wir Sie etwa um Ihre Anrede und Ihren Namen
                    bitten, damit wir Sie auch persönlich anschreiben können.
                </p>
                <p>
                    Grundsätzlich funktioniert das Anmelden zu Newslettern mit Hilfe des sogenannten
                    „Double-Opt-In-Verfahrens“. Nachdem Sie sich für unseren Newsletter auf unserer Website angemeldet
                    haben, bekommen Sie eine E-Mail, über die Sie die Newsletter-Anmeldung bestätigen. So wird
                    sichergestellt, dass Ihnen die E-Mail-Adresse gehört und sich niemand mit einer fremden
                    E-Mail-Adresse angemeldet hat. Wir oder ein von uns verwendetes Benachrichtigungs-Tool protokolliert
                    jede einzelne Anmeldung. Dies ist nötig, damit wir den rechtlich korrekten Anmeldevorgang auch
                    nachweisen können. Dabei wird in der Regel der Zeitpunkt der Anmeldung, der Zeitpunkt der
                    Anmeldebestätigung und Ihre IP-Adresse gespeichert. Zusätzlich wird auch protokolliert, wenn Sie
                    Änderungen Ihrer gespeicherten Daten vornehmen.
                </p>
                <h3 className="adsimple-112400130">Warum nutzen wir E-Mail-Marketing?</h3>
                <p>
                    Wir wollen natürlich mit Ihnen in Kontakt bleiben und Ihnen stets die wichtigsten Neuigkeiten über
                    unser Unternehmen präsentieren. Dafür nutzen wir unter anderem E-Mail-Marketing &#8211; oft auch nur
                    &#8220;Newsletter&#8221; bezeichnet &#8211; als wesentlichen Bestandteil unseres Online-Marketings.
                    Sofern Sie sich damit einverstanden erklären oder es gesetzlich erlaubt ist, schicken wir Ihnen
                    Newsletter, System-E-Mails oder andere Benachrichtigungen per E-Mail. Wenn wir im folgenden Text den
                    Begriff „Newsletter“ verwenden, meinen wir damit hauptsächlich regelmäßig versandte E-Mails.
                    Natürlich wollen wir Sie mit unseren Newsletter in keiner Weise belästigen. Darum sind wir wirklich
                    stets bemüht, nur relevante und interessante Inhalte zu bieten. So erfahren Sie etwa mehr über unser
                    Unternehmen, unsere Leistungen oder Produkte. Da wir unsere Angebote auch immer verbessern, erfahren
                    Sie über unseren Newsletter auch immer, wenn es Neuigkeiten gibt oder wir gerade spezielle,
                    lukrative Aktionen anbieten. Sofern wir einen Dienstleister, der ein professionelles Versand-Tool
                    anbietet, für unser E-Mail-Marketing beauftragen, machen wir das, um Ihnen schnelle und sichere
                    Newsletter bieten zu können. Zweck unseres E-Mail-Marketings ist grundsätzlich, Sie über neue
                    Angebote zu informieren und auch unseren unternehmerischen Zielen näher zu kommen.
                </p>
                <h3 className="adsimple-112400130">Welche Daten werden verarbeitet?</h3>
                <p>
                    Wenn Sie über unsere Website Abonnent unseres Newsletters werden, bestätigen Sie per E-Mail die
                    Mitgliedschaft in einer E-Mail-Liste. Neben IP-Adresse und E-Mail-Adresse können auch Ihre Anrede,
                    Ihr Name, Ihre Adresse und Ihre Telefonnummer gespeichert werden. Allerdings nur, wenn Sie dieser
                    Datenspeicherungen zustimmen. Die als solche markierten Daten sind notwendig, damit Sie an dem
                    angebotenen Dienst teilnehmen können. Die Angabe ist freiwillig, die Nichtangabe führt jedoch dazu,
                    dass Sie den Dienst nicht nutzen können. Zusätzlich können etwa auch Informationen zu Ihrem Gerät
                    oder zu Ihren bevorzugten Inhalten auf unserer Website gespeichert werden. Mehr zur Speicherung von
                    Daten, wenn Sie eine Website besuchen, finden Sie im Abschnitt &#8220;Automatische
                    Datenspeicherung&#8221;. Ihre Einwilligungserklärung zeichnen wir auf, damit wir stets nachweisen
                    können, dass dieser unseren Gesetzen entspricht.
                </p>
                <h3 className="adsimple-112400130">Dauer der Datenverarbeitung</h3>
                <p>
                    Wenn Sie Ihre E-Mail-Adresse aus unserem E-Mail/Newsletter-Verteiler austragen, dürfen wir Ihre
                    Adresse bis zu drei Jahren auf Grundlage unserer berechtigten Interessen speichern, damit wir Ihre
                    damalige Einwilligung noch nachweisen können. Verarbeiten dürfen wir diese Daten nur, wenn wir uns
                    gegen etwaige Ansprüche wehren müssen.
                </p>
                <p>
                    Wenn Sie allerdings bestätigen, dass Sie uns die Einwilligung zur Newsletter-Anmeldung gegeben
                    haben, können Sie jederzeit einen individuellen Löschantrag stellen. Widersprechen Sie der
                    Einwilligung dauerhaft, behalten wir uns das Recht vor, Ihre E-Mail-Adresse in einer Sperrliste zu
                    speichern. Solange Sie freiwillig unseren Newsletter abonniert haben, solange behalten wir
                    selbstverständlich auch Ihre E-Mail-Adresse.
                </p>
                <h3 className="adsimple-112400130">Widerspruchsrecht</h3>
                <p>
                    Sie haben jederzeit die Möglichkeit Ihre Newsletter-Anmeldung zu kündigen. Dafür müssen Sie
                    lediglich Ihre Einwilligung zur Newsletter-Anmeldung widerrufen. Das dauert im Normalfall nur wenige
                    Sekunden bzw. einen oder zwei Klicks. Meistens finden Sie direkt am Ende jeder E-Mail einen Link, um
                    das Newsletter-Abonnement zu kündigen. Wenn der Link im Newsletter wirklich nicht zu finden ist,
                    kontaktieren Sie uns bitte per Mail und wir werden Ihr Newsletter-Abo unverzüglich kündigen.
                </p>
                <h3 className="adsimple-112400130">Rechtsgrundlage</h3>
                <p>
                    Das Versenden unseres Newsletters erfolgt auf Grundlage Ihrer Einwilligung (Artikel 6 Abs. 1 lit. a
                    DSGVO). Das heißt, wir dürfen Ihnen nur dann einen Newsletter schicken, wenn Sie sich zuvor aktiv
                    dafür angemeldet haben. Gegebenenfalls können wir Ihnen auch Werbenachrichten senden, sofern Sie
                    unser Kunde geworden sind und der Verwendung Ihrer E-Mailadresse für Direktwerbung nicht
                    widersprochen haben.
                </p>
                <p>
                    Informationen zu speziellen E-Mail-Marketing Diensten und wie diese personenbezogene Daten
                    verarbeiten, erfahren Sie &#8211; sofern vorhanden &#8211; in den folgenden Abschnitten.
                </p>
                <h2 id="webdesign-einleitung" className="adsimple-112400130">
                    Webdesign Einleitung
                </h2>
                <table border="1" cellPadding="15">
                    <tbody>
                        <tr>
                            <td>
                                <strong className="adsimple-112400130">
                                    Webdesign Datenschutzerklärung Zusammenfassung
                                </strong>
                                <br />
                                &#x1f465; Betroffene: Besucher der Website
                                <br />
                                &#x1f91d; Zweck: Verbesserung der Nutzererfahrung
                                <br />
                                &#x1f4d3; Verarbeitete Daten: Welche Daten verarbeitet werden, hängt stark von den
                                verwendeten Diensten ab. Meist handelt es sich etwa um IP-Adresse, technische Daten,
                                Spracheinstellungen,  Browserversion, Bildschirmauflösung und Name des Browsers. Mehr
                                Details dazu finden Sie bei den jeweils eingesetzten Webdesign-Tools.
                                <br />
                                &#x1f4c5; Speicherdauer: abhängig von den eingesetzten Tools
                                <br />
                                &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6
                                Abs. 1 lit. f DSGVO (Berechtigte Interessen)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3 className="adsimple-112400130">Was ist Webdesign?</h3>
                <p>
                    Wir verwenden auf unserer Website verschiedene Tools, die unserem Webdesign dienen. Bei Webdesign
                    geht es nicht, wie oft angenommen, nur darum, dass unsere Website hübsch aussieht, sondern auch um
                    Funktionalität und Leistung. Aber natürlich ist die passende Optik einer Website auch eines der
                    großen Ziele professionellen Webdesigns. Webdesign ist ein Teilbereich des Mediendesigns und
                    beschäftigt sich sowohl mit der visuellen als auch der strukturellen und funktionalen Gestaltung
                    einer Website. Ziel ist es mit Hilfe von Webdesign Ihre Erfahrung auf unserer Website zu verbessern.
                    Im Webdesign-Jargon spricht man in diesem Zusammenhang von User-Experience (UX) und Usability. Unter
                    User Experience versteht man alle Eindrücke und Erlebnisse, die der Websitebesucher auf einer
                    Website erfährt. Ein Unterpunkt der User Experience ist die Usability. Dabei geht es um die
                    Nutzerfreundlichkeit einer Website. Wert gelegt wird hier vor allem darauf, dass Inhalte,
                    Unterseiten oder Produkte klar strukturiert sind und Sie leicht und schnell finden, wonach Sie
                    suchen. Um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten, verwenden wir auch
                    sogenannte Webdesign-Tools von Drittanbietern. Unter die Kategorie „Webdesign“ fallen in dieser
                    Datenschutzerklärung also alle Dienste, die unsere Website gestalterisch verbessern. Das können
                    beispielsweise Schriftarten, diverse Plugins oder andere eingebundene Webdesign-Funktionen sein.
                </p>
                <h3 className="adsimple-112400130">Warum verwenden wir Webdesign-Tools?</h3>
                <p>
                    Wie Sie Informationen auf einer Website aufnehmen, hängt sehr stark von der Struktur, der
                    Funktionalität und der visuellen Wahrnehmung der Website ab. Daher wurde auch für uns ein gutes und
                    professionelles Webdesign immer wichtiger. Wir arbeiten ständig an der Verbesserung unserer Website
                    und sehen dies auch als erweiterte Dienstleistung für Sie als Websitebesucher. Weiters hat eine
                    schöne und funktionierende Website auch wirtschaftliche Vorteile für uns. Schließlich werden Sie uns
                    nur besuchen und unsere Angebote in Anspruch nehmen, wenn Sie sich rundum wohl fühlen.
                </p>
                <h3 className="adsimple-112400130">Welche Daten werden durch Webdesign-Tools gespeichert?</h3>
                <p>
                    Wenn Sie unsere Website besuchen, können Webdesign-Elemente in unseren Seiten eingebunden sein, die
                    auch Daten verarbeiten können. Um welche Daten es sich genau handelt, hängt natürlich stark von den
                    verwendeten Tools ab. Weiter unter sehen Sie genau, welche Tools wir für unsere Website verwenden.
                    Wir empfehlen Ihnen für nähere Informationen über die Datenverarbeitung auch die jeweilige
                    Datenschutzerklärung der verwendeten Tools durchzulesen. Meistens erfahren Sie dort, welche Daten
                    verarbeitet werden, ob Cookies eingesetzt werden und wie lange die Daten aufbewahrt werden. Durch
                    Schriftarten wie etwa Google Fonts werden beispielsweise auch Informationen wie Spracheinstellungen,
                    IP-Adresse, Version des Browsers, Bildschirmauflösung des Browsers und Name des Browsers automatisch
                    an die Google-Server übertragen.
                </p>
                <h3 className="adsimple-112400130">Dauer der Datenverarbeitung</h3>
                <p>
                    Wie lange Daten verarbeitet werden, ist sehr individuell und hängt von den eingesetzten
                    Webdesign-Elementen ab. Wenn Cookies beispielsweise zum Einsatz kommen, kann die Aufbewahrungsdauer
                    nur eine Minute, aber auch ein paar Jahre dauern. Machen Sie sich diesbezüglich bitte schlau. Dazu
                    empfehlen wir Ihnen einerseits unseren allgemeinen Textabschnitt über Cookies sowie die
                    Datenschutzerklärungen der eingesetzten Tools. Dort erfahren Sie in der Regel, welche Cookies genau
                    eingesetzt werden, und welche Informationen darin gespeichert werden. Google-Font-Dateien werden zum
                    Beispiel ein Jahr gespeichert. Damit soll die Ladezeit einer Website verbessert werden.
                    Grundsätzlich werden Daten immer nur so lange aufbewahrt, wie es für die Bereitstellung des Dienstes
                    nötig ist. Bei gesetzlichen Vorschreibungen können Daten auch länger gespeichert werden.
                </p>
                <h3 className="adsimple-112400130">Widerspruchsrecht</h3>
                <p>
                    Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies
                    bzw. Drittanbietern zu widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool oder
                    über andere Opt-Out-Funktionen. Sie können auch die Datenerfassung durch Cookies verhindern, indem
                    Sie in Ihrem Browser die Cookies verwalten, deaktivieren oder löschen. Unter Webdesign-Elementen
                    (meistens bei Schriftarten) gibt es allerdings auch Daten, die nicht ganz so einfach gelöscht werden
                    können. Das ist dann der Fall, wenn Daten direkt bei einem Seitenaufruf automatisch erhoben und an
                    einen Drittanbieter (wie z. B. Google) übermittelt werden. Wenden Sie sich dann bitte an den Support
                    des entsprechenden Anbieters. Im Fall von Google erreichen Sie den Support unter{" "}
                    <a className="adsimple-112400130" href="https://support.google.com/?hl=de">
                        https://support.google.com/?hl=de
                    </a>
                    .
                </p>
                <h3 className="adsimple-112400130">Rechtsgrundlage</h3>
                <p>
                    Wenn Sie eingewilligt haben, dass Webdesign-Tools eingesetzt werden dürfen, ist die Rechtsgrundlage
                    der entsprechenden Datenverarbeitung diese Einwilligung. Diese Einwilligung stellt laut Art. 6 Abs.
                    1 lit. a DSGVO (Einwilligung) die Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie
                    sie bei der Erfassung durch Webdesign-Tools vorkommen kann, dar. Von unserer Seite besteht zudem ein
                    berechtigtes Interesse, das Webdesign auf unserer Website zu verbessern. Schließlich können wir
                    Ihnen nur dann ein schönes und professionelles Webangebot liefern. Die dafür entsprechende
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen). Wir setzen Webdesign-Tools
                    gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben. Das wollen wir hier auf jeden Fall
                    nochmals betonen.
                </p>
                <p>
                    Informationen zu speziellen Webdesign-Tools erhalten Sie &#8211; sofern vorhanden &#8211; in den
                    folgenden Abschnitten.
                </p>
                <h2 id="google-fonts-datenschutzerklaerung" className="adsimple-112400130">
                    Google Fonts Datenschutzerklärung
                </h2>
                <table border="1" cellPadding="15">
                    <tbody>
                        <tr>
                            <td>
                                <strong className="adsimple-112400130">
                                    Google Fonts Datenschutzerklärung Zusammenfassung
                                </strong>
                                <br />
                                &#x1f465; Betroffene: Besucher der Website
                                <br />
                                &#x1f91d; Zweck: Optimierung unserer Serviceleistung
                                <br />
                                &#x1f4d3; Verarbeitete Daten: Daten wie etwa IP-Adresse und CSS- und Schrift-Anfragen
                                <br />
                                Mehr Details dazu finden Sie weiter unten in dieser Datenschutzerklärung.
                                <br />
                                &#x1f4c5; Speicherdauer: Font-Dateien werden bei Google ein Jahr gespeichert
                                <br />
                                &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6
                                Abs. 1 lit. f DSGVO (Berechtigte Interessen)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3 className="adsimple-112400130">Was sind Google Fonts?</h3>
                <p>
                    Auf unserer Website verwenden wir Google Fonts. Das sind die &#8220;Google-Schriften&#8221; der
                    Firma Google Inc. Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon
                    House, Barrow Street Dublin 4, Irland) für alle Google-Dienste verantwortlich.
                </p>
                <p>
                    Für die Verwendung von Google-Schriftarten müssen Sie sich nicht anmelden bzw. ein Passwort
                    hinterlegen. Weiters werden auch keine Cookies in Ihrem Browser gespeichert. Die Dateien (CSS,
                    Schriftarten/Fonts) werden über die Google-Domains fonts.googleapis.com und fonts.gstatic.com
                    angefordert. Laut Google sind die Anfragen nach CSS und Schriften vollkommen getrennt von allen
                    anderen Google-Diensten. Wenn Sie ein Google-Konto haben, brauchen Sie keine Sorge haben, dass Ihre
                    Google-Kontodaten, während der Verwendung von Google Fonts, an Google übermittelt werden. Google
                    erfasst die Nutzung von CSS (Cascading Style Sheets) und der verwendeten Schriftarten und speichert
                    diese Daten sicher. Wie die Datenspeicherung genau aussieht, werden wir uns noch im Detail ansehen.
                </p>
                <p>
                    Google Fonts (früher Google Web Fonts) ist ein Verzeichnis mit über 800 Schriftarten, die{" "}
                    <a className="adsimple-112400130" href="https://de.wikipedia.org/wiki/Google_LLC?tid=112400130">
                        Google
                    </a>
                     Ihren Nutzern kostenlos zu Verfügung stellen.
                </p>
                <p>
                    Viele dieser Schriftarten sind unter der SIL Open Font License veröffentlicht, während andere unter
                    der Apache-Lizenz veröffentlicht wurden. Beides sind freie Software-Lizenzen.
                </p>
                <h3 className="adsimple-112400130">Warum verwenden wir Google Fonts auf unserer Website?</h3>
                <p>
                    Mit Google Fonts können wir auf der eigenen Webseite Schriften nutzen, und müssen sie nicht auf
                    unserem eigenen Server hochladen. Google Fonts ist ein wichtiger Baustein, um die Qualität unserer
                    Webseite hoch zu halten. Alle Google-Schriften sind automatisch für das Web optimiert und dies spart
                    Datenvolumen und ist speziell für die Verwendung bei mobilen Endgeräten ein großer Vorteil. Wenn Sie
                    unsere Seite besuchen, sorgt die niedrige Dateigröße für eine schnelle Ladezeit. Des Weiteren sind
                    Google Fonts sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme (Rendering) in verschiedenen
                    Browsern, Betriebssystemen und mobilen Endgeräten können zu Fehlern führen. Solche Fehler können
                    teilweise Texte bzw. ganze Webseiten optisch verzerren. Dank des schnellen Content Delivery Network
                    (CDN) gibt es mit Google Fonts keine plattformübergreifenden Probleme. Google Fonts unterstützt alle
                    gängigen Browser (Google Chrome, Mozilla Firefox, Apple Safari, Opera) und funktioniert zuverlässig
                    auf den meisten modernen mobilen Betriebssystemen, einschließlich Android 2.2+ und iOS 4.2+ (iPhone,
                    iPad, iPod). Wir verwenden die Google Fonts also, damit wir unser gesamtes Online-Service so schön
                    und einheitlich wie möglich darstellen können.
                </p>
                <h3 className="adsimple-112400130">Welche Daten werden von Google gespeichert?</h3>
                <p>
                    Wenn Sie unsere Webseite besuchen, werden die Schriften über einen Google-Server nachgeladen. Durch
                    diesen externen Aufruf werden Daten an die Google-Server übermittelt. So erkennt Google auch, dass
                    Sie bzw. Ihre IP-Adresse unsere Webseite besucht. Die Google Fonts API wurde entwickelt, um
                    Verwendung, Speicherung und Erfassung von Endnutzerdaten auf das zu reduzieren, was für eine
                    ordentliche Bereitstellung von Schriften nötig ist. API steht übrigens für „Application Programming
                    Interface“ und dient unter anderem als Datenübermittler im Softwarebereich.
                </p>
                <p>
                    Google Fonts speichert CSS- und Schrift-Anfragen sicher bei Google und ist somit geschützt. Durch
                    die gesammelten Nutzungszahlen kann Google feststellen, wie gut die einzelnen Schriften ankommen.
                    Die Ergebnisse veröffentlicht Google auf internen Analyseseiten, wie beispielsweise Google
                    Analytics. Zudem verwendet Google auch Daten des eigenen Web-Crawlers, um festzustellen, welche
                    Webseiten Google-Schriften verwenden. Diese Daten werden in der BigQuery-Datenbank von Google Fonts
                    veröffentlicht. Unternehmer und Entwickler nützen das Google-Webservice BigQuery, um große
                    Datenmengen untersuchen und bewegen zu können.
                </p>
                <p>
                    Zu bedenken gilt allerdings noch, dass durch jede Google Font Anfrage auch Informationen
                    wie Spracheinstellungen, IP-Adresse, Version des Browsers, Bildschirmauflösung des Browsers und Name
                    des Browsers automatisch an die Google-Server übertragen werden. Ob diese Daten auch gespeichert
                    werden, ist nicht klar feststellbar bzw. wird von Google nicht eindeutig kommuniziert.
                </p>
                <h3 className="adsimple-112400130">Wie lange und wo werden die Daten gespeichert?</h3>
                <p>
                    Anfragen für CSS-Assets speichert Google einen Tag lang auf seinen Servern, die hauptsächlich
                    außerhalb der EU angesiedelt sind. Das ermöglicht uns, mithilfe eines Google-Stylesheets die
                    Schriftarten zu nutzen. Ein Stylesheet ist eine Formatvorlage, über die man einfach und schnell z.B.
                    das Design bzw. die Schriftart einer Webseite ändern kann.
                </p>
                <p>
                    Die Font-Dateien werden bei Google ein Jahr gespeichert. Google verfolgt damit das Ziel, die
                    Ladezeit von Webseiten grundsätzlich zu verbessern. Wenn Millionen von Webseiten auf die gleichen
                    Schriften verweisen, werden sie nach dem ersten Besuch zwischengespeichert und erscheinen sofort auf
                    allen anderen später besuchten Webseiten wieder. Manchmal aktualisiert Google Schriftdateien, um die
                    Dateigröße zu reduzieren, die Abdeckung von Sprache zu erhöhen und das Design zu verbessern.
                </p>
                <h3 className="adsimple-112400130">
                    Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?
                </h3>
                <p>
                    Jene Daten, die Google für einen Tag bzw. ein Jahr speichert können nicht einfach gelöscht werden.
                    Die Daten werden beim Seitenaufruf automatisch an Google übermittelt. Um diese Daten vorzeitig
                    löschen zu können, müssen Sie den Google-Support auf{" "}
                    <a className="adsimple-112400130" href="https://support.google.com/?hl=de&amp;tid=112400130">
                        https://support.google.com/?hl=de&amp;tid=112400130
                    </a>{" "}
                    kontaktieren. Datenspeicherung verhindern Sie in diesem Fall nur, wenn Sie unsere Seite nicht
                    besuchen.
                </p>
                <p>
                    Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten.
                    Wir können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere
                    Webseite rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf{" "}
                    <a className="adsimple-112400130" href="https://developers.google.com/fonts/faq?tid=112400130">
                        https://developers.google.com/fonts/faq?tid=112400130
                    </a>
                    . Dort geht zwar Google auf datenschutzrelevante Angelegenheiten ein, doch wirklich detaillierte
                    Informationen über Datenspeicherung sind nicht enthalten. Es ist relativ schwierig, von Google
                    wirklich präzise Informationen über gespeicherten Daten zu bekommen.
                </p>
                <h3 className="adsimple-112400130">Rechtsgrundlage</h3>
                <p>
                    Wenn Sie eingewilligt haben, dass Google Fonts eingesetzt werden darf, ist die Rechtsgrundlage der
                    entsprechenden Datenverarbeitung diese Einwilligung. Diese Einwilligung stellt laut
                    <strong className="adsimple-112400130"> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong> die
                    Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch Google
                    Fonts vorkommen kann, dar.
                </p>
                <p>
                    Von unserer Seite besteht zudem ein berechtigtes Interesse, Google Font zu verwenden, um unser
                    Online-Service zu optimieren. Die dafür entsprechende Rechtsgrundlage ist{" "}
                    <strong className="adsimple-112400130">Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</strong>.
                    Wir setzen Google Font gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben.
                </p>
                <p>
                    Google verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass nach Meinung
                    des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die
                    USA besteht. Dies kann mit verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der
                    Datenverarbeitung einhergehen.
                </p>
                <p>
                    Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in Drittstaaten (außerhalb der
                    Europäischen Union, Island, Liechtenstein, Norwegen, also insbesondere in den USA) oder einer
                    Datenweitergabe dorthin verwendet Google sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und
                    3 DSGVO). Standardvertragsklauseln (Standard Contractual Clauses – SCC) sind von der EU-Kommission
                    bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre Daten auch dann den europäischen
                    Datenschutzstandards entsprechen, wenn diese in Drittländer (wie beispielsweise in die USA)
                    überliefert und dort gespeichert werden. Durch diese Klauseln verpflichtet sich Google, bei der
                    Verarbeitung Ihrer relevanten Daten, das europäische Datenschutzniveau einzuhalten, selbst wenn die
                    Daten in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem
                    Durchführungsbeschluss der EU-Kommission. Sie finden den Beschluss und die entsprechenden
                    Standardvertragsklauseln u.a. hier:{" "}
                    <a
                        className="adsimple-112400130"
                        href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
                    </a>
                </p>
                <p>
                    Die Google Ads Datenverarbeitungsbedingungen (Google Ads Data Processing Terms), welche auch den
                    Standardvertragsklauseln für Google Fonts entsprechen, finden Sie unter{" "}
                    <a
                        className="adsimple-112400130"
                        href="https://business.safety.google/adsprocessorterms/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://business.safety.google/adsprocessorterms/
                    </a>
                    .
                </p>
                <p>
                    Welche Daten grundsätzlich von Google erfasst werden und wofür diese Daten verwendet werden, können
                    Sie auch auf{" "}
                    <a
                        className="adsimple-112400130"
                        href="https://policies.google.com/privacy?hl=de&amp;tid=112400130"
                    >
                        https://www.google.com/intl/de/policies/privacy/
                    </a>{" "}
                    nachlesen.
                </p>
                <h2 id="erklaerung-verwendeter-begriffe" className="adsimple-112400130">
                    Erklärung verwendeter Begriffe
                </h2>
                <p>
                    Wir sind stets bemüht unsere Datenschutzerklärung so klar und verständlich wie möglich zu verfassen.
                    Besonders bei technischen und rechtlichen Themen ist das allerdings nicht immer ganz einfach. Es
                    macht oft Sinn juristische Begriffe (wie z. B. personenbezogene Daten) oder bestimmte technische
                    Ausdrücke (wie z. B. Cookies, IP-Adresse) zu verwenden. Wir möchte diese aber nicht ohne Erklärung
                    verwenden. Nachfolgend finden Sie nun eine alphabetische Liste von wichtigen verwendeten Begriffen,
                    auf die wir in der bisherigen Datenschutzerklärung vielleicht noch nicht ausreichend eingegangen
                    sind. Falls diese Begriffe der DSGVO entnommen wurden und es sich um Begriffsbestimmungen handelt,
                    werden wir hier auch die DSGVO-Texte anführen und gegebenenfalls noch eigene Erläuterungen
                    hinzufügen.
                </p>
                <h2 id="auftragsverarbeiter" className="adsimple-112400130">
                    Auftragsverarbeiter
                </h2>
                <p>
                    <strong className="adsimple-112400130">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
                </p>
                <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                <blockquote>
                    <p>
                        <em>
                            <strong className="adsimple-112400130">„Auftragsverarbeiter“</strong> eine natürliche oder
                            juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im
                            Auftrag des Verantwortlichen verarbeitet;
                        </em>
                    </p>
                </blockquote>
                <p>
                    <strong className="adsimple-112400130">Erläuterung:</strong> Wir sind als Unternehmen und
                    Websiteinhaber für alle Daten, die wir von Ihnen verarbeiten verantwortlich. Neben den
                    Verantwortlichen kann es auch sogenannte Auftragsverarbeiter geben. Dazu zählt jedes Unternehmen
                    bzw. jede Person, die in unserem Auftrag personenbezogene Daten verarbeitet. Auftragsverarbeiter
                    können folglich, neben Dienstleistern wie Steuerberater, etwa auch Hosting- oder Cloudanbieter,
                    Bezahlungs- oder Newsletter-Anbieter oder große Unternehmen wie beispielsweise Google oder Microsoft
                    sein.
                </p>
                <h2 id="einwilligung" className="adsimple-112400130">
                    Einwilligung
                </h2>
                <p>
                    <strong className="adsimple-112400130">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
                </p>
                <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                <blockquote>
                    <p>
                        <em>
                            <strong className="adsimple-112400130">„Einwilligung“</strong> der betroffenen Person jede
                            freiwillig für den bestimmten Fall, in informierter Weise und unmissverständlich abgegebene
                            Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden
                            Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der
                            sie betreffenden personenbezogenen Daten einverstanden ist;
                        </em>
                    </p>
                </blockquote>
                <p>
                    <strong className="adsimple-112400130">Erläuterung: </strong>In der Regel erfolgt bei Websites eine
                    solche Einwilligung über ein Cookie-Consent-Tool. Sie kennen das bestimmt. Immer wenn Sie erstmals
                    eine Website besuchen, werden Sie meist über einen Banner gefragt, ob Sie der Datenverarbeitung
                    zustimmen bzw. einwilligen. Meist können Sie auch individuelle Einstellungen treffen und so selbst
                    entscheiden, welche Datenverarbeitung Sie erlauben und welche nicht. Wenn Sie nicht einwilligen,
                    dürfen auch keine personenbezogene Daten von Ihnen verarbeitet werden. Grundsätzlich kann eine
                    Einwilligung natürlich auch schriftlich, also nicht über ein Tool, erfolgen.
                </p>
                <h2 id="personenbezogene-daten" className="adsimple-112400130">
                    Personenbezogene Daten
                </h2>
                <p>
                    <strong className="adsimple-112400130">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
                </p>
                <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                <blockquote>
                    <p>
                        <strong className="adsimple-112400130">
                            <em>„personenbezogene Daten“</em>
                        </strong>
                        <em>
                            {" "}
                            alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person
                            (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person
                            angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie
                            einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem
                            oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen,
                            genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser
                            natürlichen Person sind, identifiziert werden kann;
                        </em>
                    </p>
                </blockquote>
                <p>
                    <strong className="adsimple-112400130">Erläuterung:</strong> Personenbezogene Daten sind also all
                    jene Daten, die Sie als Person identifizieren können. Das sind in der Regel Daten wie etwa:
                </p>
                <ul className="adsimple-112400130">
                    <li className="adsimple-112400130">Name</li>
                    <li className="adsimple-112400130">Adresse</li>
                    <li className="adsimple-112400130">E-Mail-Adresse</li>
                    <li className="adsimple-112400130">Post-Anschrift</li>
                    <li className="adsimple-112400130">Telefonnummer</li>
                    <li className="adsimple-112400130">Geburtsdatum</li>
                    <li className="adsimple-112400130">
                        Kennnummern wie Sozialversicherungsnummer, Steueridentifikationsnummer, Personalausweisnummer
                        oder Matrikelnummer
                    </li>
                    <li className="adsimple-112400130">
                        Bankdaten wie Kontonummer, Kreditinformationen, Kontostände uvm.
                    </li>
                </ul>
                <p>
                    Laut Europäischem Gerichtshof (EuGH) zählt auch Ihre{" "}
                    <strong className="adsimple-112400130">IP-Adresse zu den personenbezogenen Daten</strong>.
                    IT-Experten können anhand Ihrer IP-Adresse zumindest den ungefähren Standort Ihres Geräts und in
                    weiterer Folge Sie als Anschlussinhabers feststellen. Daher benötigt auch das Speichern einer
                    IP-Adresse eine Rechtsgrundlage im Sinne der DSGVO. Es gibt auch noch sogenannte{" "}
                    <strong className="adsimple-112400130">„besondere Kategorien“</strong> der personenbezogenen Daten,
                    die auch besonders schützenswert sind. Dazu zählen:
                </p>
                <ul className="adsimple-112400130">
                    <li className="adsimple-112400130">rassische und ethnische Herkunft</li>
                    <li className="adsimple-112400130">politische Meinungen</li>
                    <li className="adsimple-112400130">religiöse bzw. weltanschauliche Überzeugungen</li>
                    <li className="adsimple-112400130">die Gewerkschaftszugehörigkeit</li>
                    <li className="adsimple-112400130">
                        genetische Daten wie beispielsweise Daten, die aus Blut- oder Speichelproben entnommen werden
                    </li>
                    <li className="adsimple-112400130">
                        biometrische Daten (das sind Informationen zu psychischen, körperlichen oder verhaltenstypischen
                        Merkmalen, die eine Person identifizieren können).
                        <br />
                        Gesundheitsdaten
                    </li>
                    <li className="adsimple-112400130">Daten zur sexuellen Orientierung oder zum Sexualleben</li>
                </ul>
                <h2 id="profiling" className="adsimple-112400130">
                    Profiling
                </h2>
                <p>
                    <strong className="adsimple-112400130">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
                </p>
                <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                <blockquote>
                    <p>
                        <em>
                            <strong className="adsimple-112400130">„Profiling“</strong> jede Art der automatisierten
                            Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten
                            verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person
                            beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche
                            Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten,
                            Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen;
                        </em>
                    </p>
                </blockquote>
                <p>
                    <strong className="adsimple-112400130">Erläuterung:</strong> Beim Profiling werden verschiedene
                    Informationen über eine Person zusammengetragen, um daraus mehr über diese Person zu erfahren. Im
                    Webbereich wird Profiling häufig für Werbezwecke oder auch für Bonitätsprüfungen angewandt. Web-
                    bzw. Werbeanalyseprogramme sammeln zum Beispiel Daten über Ihre Verhalten und Ihre Interessen auf
                    einer Website. Daraus ergibt sich ein spezielles Userprofil, mit dessen Hilfe Werbung gezielt an
                    eine Zielgruppe ausgespielt werden kann.
                </p>
                <p>&nbsp;</p>
                <h2 id="verantwortlicher" className="adsimple-112400130">
                    Verantwortlicher
                </h2>
                <p>
                    <strong className="adsimple-112400130">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
                </p>
                <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                <blockquote>
                    <p>
                        <em>
                            <strong className="adsimple-112400130">„Verantwortlicher“</strong> die natürliche oder
                            juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit
                            anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet;
                            sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der
                            Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die
                            bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der
                            Mitgliedstaaten vorgesehen werden;
                        </em>
                    </p>
                </blockquote>
                <p>
                    <strong className="adsimple-112400130">Erläuterung:</strong> In unserem Fall sind wir für die
                    Verarbeitung Ihrer personenbezogenen Daten verantwortlich und folglich der
                    &#8220;Verantwortliche&#8221;. Wenn wir erhobene Daten zur Verarbeitung an andere Dienstleister
                    weitergeben, sind diese &#8220;Auftragsverarbeiter&#8221;. Dafür muss ein
                    &#8220;Auftragsverarbeitungsvertrag (AVV)&#8221; unterzeichnet werden.
                </p>
                <p>&nbsp;</p>
                <h2 id="verarbeitung" className="adsimple-112400130">
                    Verarbeitung
                </h2>
                <p>
                    <strong className="adsimple-112400130">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
                </p>
                <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                <blockquote>
                    <p>
                        <strong className="adsimple-112400130">
                            <em>„Verarbeitung“</em>
                        </strong>
                        <em>
                            {" "}
                            jeden mit oder ohne Hilfe automatisierter Verfahren ausgeführten Vorgang oder jede solche
                            Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die
                            Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das
                            Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere
                            Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen
                            oder die Vernichtung;
                        </em>
                    </p>
                </blockquote>
                <p>
                    <strong className="adsimple-112400130">Anmerkung: </strong>Wenn wir in unserer Datenschutzerklärung
                    von Verarbeitung sprechen, meinen wir damit jegliche Art von Datenverarbeitung. Dazu zählt, wie oben
                    in der originalen DSGVO-Erklärung erwähnt, nicht nur das Erheben sondern auch das Speichern und
                    Verarbeiten von Daten.
                </p>
                <p>Alle Texte sind urheberrechtlich geschützt.</p>
                <p>
                    Quelle: Erstellt mit dem{" "}
                    <a
                        href="https://www.adsimple.at/datenschutz-generator/"
                        title="Datenschutz Generator von AdSimple für Österreich"
                    >
                        Datenschutz Generator
                    </a>{" "}
                    von AdSimple
                </p>
            </div>
        </>
    );
}

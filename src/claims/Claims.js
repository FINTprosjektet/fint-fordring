import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ClaimTabs from './claimTabs/ClaimTabs';
import LoadingProgress from '../common/LoadingProgress';
import PaymentApi from '../api/PaymentApi';

const styles = theme => ({
    root: {
        width: '90%',
        marginTop: '65px',
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

let testDataFordring = [
    {
        "ordrenummer": "1",
        "fakturanummer": null,
        "restBelop": 2000,
        "kunde": {
            "kundenummer": "12345678901",
            "navn": {
                "etternavn": "Testesen",
                "fornavn": "Pelle",
                "mellomnavn": null
            },
            "kontaktinformasjon": {
                "epostadresse": "string@string.string",
                "mobiltelefonnummer": "12345678",
                "nettsted": "string.string",
                "sip": "string",
                "telefonnummer": "87654321"
            },
            "postadresse": {
                "adresselinje": [
                    "hjemme"
                ],
                "postnummer": "0000",
                "poststed": "Hjemme"
            }
        },
        "fakturagrunnlag": {
            "avgifter": 0,
            "fakturadato": 1529408017905,
            "fakturalinjer": [
                {
                    "antall": 0,
                    "fritekst": "string",
                    "pris": 0,
                    "systemId": {
                        "gyldighetsperiode": {
                            "beskrivelse": "string",
                            "slutt": 1529408017906,
                            "start": 1529408017906
                        },
                        "identifikatorverdi": "string"
                    }
                }
            ],
            "fakturanummer": {
                "gyldighetsperiode": {
                    "beskrivelse": "string",
                    "slutt": 1529408017906,
                    "start": 1529408017906
                },
                "identifikatorverdi": "string"
            },
            "forfallsdato": 1529408017906,
            "leveringsdato": 1529408017906,
            "netto": 0,
            "total": 2000,
            "systemId": {
                "gyldighetsperiode": {
                    "beskrivelse": "string",
                    "slutt": 1529408017906,
                    "start": 1529408017906
                },
                "identifikatorverdi": "string"
            }
        },
        "sentToExternalSystem": false
    },{
        "ordrenummer": "2",
        "fakturanummer": null,
        "restBelop": 1500,
        "kunde": {
            "kundenummer": "12345678901",
            "navn": {
                "etternavn": "Testesen",
                "fornavn": "Pelle",
                "mellomnavn": "Tester"
            },
            "kontaktinformasjon": {
                "epostadresse": "string@string.string",
                "mobiltelefonnummer": "12345678",
                "nettsted": "string.string",
                "sip": "string",
                "telefonnummer": "87654321"
            },
            "postadresse": {
                "adresselinje": [
                    "hjemme"
                ],
                "postnummer": "0000",
                "poststed": "Hjemme"
            }
        },
        "fakturagrunnlag": {
            "avgifter": 0,
            "fakturadato": 1529408017905,
            "fakturalinjer": [
                {
                    "antall": 0,
                    "fritekst": "string",
                    "pris": 0,
                    "systemId": {
                        "gyldighetsperiode": {
                            "beskrivelse": "string",
                            "slutt": 1529408017906,
                            "start": 1529408017906
                        },
                        "identifikatorverdi": "string"
                    }
                }
            ],
            "fakturanummer": {
                "gyldighetsperiode": {
                    "beskrivelse": "string",
                    "slutt": 1529408017906,
                    "start": 1529408017906
                },
                "identifikatorverdi": "string"
            },
            "forfallsdato": 1529408017906,
            "leveringsdato": 1529408017906,
            "netto": 0,
            "total": 2000,
            "systemId": {
                "gyldighetsperiode": {
                    "beskrivelse": "string",
                    "slutt": 1529408017906,
                    "start": 1529408017906
                },
                "identifikatorverdi": "string"
            }
        },
        "sentToExternalSystem": false
    },{
        "ordrenummer": "3",
        "fakturanummer": null,
        "restBelop": 2000,
        "kunde": {
            "kundenummer": "12345678901",
            "navn": {
                "etternavn": "Testesen",
                "fornavn": "Pelle",
                "mellomnavn": "Tester"
            },
            "kontaktinformasjon": {
                "epostadresse": "string@string.string",
                "mobiltelefonnummer": "12345678",
                "nettsted": "string.string",
                "sip": "string",
                "telefonnummer": "87654321"
            },
            "postadresse": {
                "adresselinje": [
                    "hjemme"
                ],
                "postnummer": "0000",
                "poststed": "Hjemme"
            }
        },
        "fakturagrunnlag": {
            "avgifter": 0,
            "fakturadato": 1529408017905,
            "fakturalinjer": [
                {
                    "antall": 0,
                    "fritekst": "string",
                    "pris": 0,
                    "systemId": {
                        "gyldighetsperiode": {
                            "beskrivelse": "string",
                            "slutt": 1529408017906,
                            "start": 1529408017906
                        },
                        "identifikatorverdi": "string"
                    }
                }
            ],
            "fakturanummer": {
                "gyldighetsperiode": {
                    "beskrivelse": "string",
                    "slutt": 1529408017906,
                    "start": 1529408017906
                },
                "identifikatorverdi": "string"
            },
            "forfallsdato": 1529408017906,
            "leveringsdato": 1529408017906,
            "netto": 0,
            "total": 2000,
            "systemId": {
                "gyldighetsperiode": {
                    "beskrivelse": "string",
                    "slutt": 1529408017906,
                    "start": 1529408017906
                },
                "identifikatorverdi": "string"
            }
        },
        "sentToExternalSystem": false
    },{
        "ordrenummer": "4",
        "fakturanummer": null,
        "restBelop": 0,
        "kunde": {
            "kundenummer": "12345678901",
            "navn": {
                "etternavn": "Testesen",
                "fornavn": "Pelle",
                "mellomnavn": "Tester"
            },
            "kontaktinformasjon": {
                "epostadresse": "string@string.string",
                "mobiltelefonnummer": "12345678",
                "nettsted": "string.string",
                "sip": "string",
                "telefonnummer": "87654321"
            },
            "postadresse": {
                "adresselinje": [
                    "hjemme"
                ],
                "postnummer": "0000",
                "poststed": "Hjemme"
            }
        },
        "fakturagrunnlag": {
            "avgifter": 0,
            "fakturadato": 1529408017905,
            "fakturalinjer": [
                {
                    "antall": 0,
                    "fritekst": "string",
                    "pris": 0,
                    "systemId": {
                        "gyldighetsperiode": {
                            "beskrivelse": "string",
                            "slutt": 1529408017906,
                            "start": 1529408017906
                        },
                        "identifikatorverdi": "string"
                    }
                }
            ],
            "fakturanummer": {
                "gyldighetsperiode": {
                    "beskrivelse": "string",
                    "slutt": 1529408017906,
                    "start": 1529408017906
                },
                "identifikatorverdi": "string"
            },
            "forfallsdato": 1529408017906,
            "leveringsdato": 1529408017906,
            "netto": 0,
            "total": 2000,
            "systemId": {
                "gyldighetsperiode": {
                    "beskrivelse": "string",
                    "slutt": 1529408017906,
                    "start": 1529408017906
                },
                "identifikatorverdi": "string"
            }
        },
        "sentToExternalSystem": false
    },{
        "ordrenummer": "5",
        "fakturanummer": null,
        "restBelop": 0,
        "kunde": {
            "kundenummer": "12345678901",
            "navn": {
                "etternavn": "Testesen",
                "fornavn": "Pelle",
                "mellomnavn": "Tester"
            },
            "kontaktinformasjon": {
                "epostadresse": "string@string.string",
                "mobiltelefonnummer": "12345678",
                "nettsted": "string.string",
                "sip": "string",
                "telefonnummer": "87654321"
            },
            "postadresse": {
                "adresselinje": [
                    "hjemme"
                ],
                "postnummer": "0000",
                "poststed": "Hjemme"
            }
        },
        "fakturagrunnlag": {
            "avgifter": 0,
            "fakturadato": 1529408017905,
            "fakturalinjer": [
                {
                    "antall": 0,
                    "fritekst": "string",
                    "pris": 0,
                    "systemId": {
                        "gyldighetsperiode": {
                            "beskrivelse": "string",
                            "slutt": 1529408017906,
                            "start": 1529408017906
                        },
                        "identifikatorverdi": "string"
                    }
                }
            ],
            "fakturanummer": {
                "gyldighetsperiode": {
                    "beskrivelse": "string",
                    "slutt": 1529408017906,
                    "start": 1529408017906
                },
                "identifikatorverdi": "string"
            },
            "forfallsdato": 1529408017906,
            "leveringsdato": 1529408017906,
            "netto": 0,
            "total": 2000,
            "systemId": {
                "gyldighetsperiode": {
                    "beskrivelse": "string",
                    "slutt": 1529408017906,
                    "start": 1529408017906
                },
                "identifikatorverdi": "string"
            }
        },
        "sentToExternalSystem": false
    },
    {
        "ordrenummer": "6",
        "fakturanummer": null,
        "restBelop": 100,
        "kunde": {
                "kundenummer": "12345678909",
                "fakturanummer" : "4",
                "organisasjonnummer" : "1203951",
                "navn": {
                    "fornavn" : "Ole",
                    "mellomnavn" : "Olaf",
                    "etternavn" : "Oteke"
                },
                "postadresse": {
                    "adresselinje": [
                        "Skole vei 207"
                    ],
                    "postnummer": "4260",
                    "poststed": "Torvastad"
                },
                "kontaktinformasjon": {
                    "epostadresse": "Kjellkå@hotmail.com",
                    "mobiltelefonnummer": "12345678",
                    "nettsted": null,
                    "sip": null,
                    "telefonnummer": null
                }
        },
        "fakturagrunnlag": {
            "avgifter": 0,
            "fakturadato": 1529408017905,
            "fakturalinjer": [
                {
                    "antall": 0,
                    "fritekst": "string",
                    "pris": 0,
                    "systemId": {
                        "gyldighetsperiode": {
                            "beskrivelse": "string",
                            "slutt": 1529408017906,
                            "start": 1529408017906
                        },
                        "identifikatorverdi": "string"
                    }
                },
                {
                    "antall": 0,
                    "fritekst": "string",
                    "pris": 0,
                    "systemId": {
                        "gyldighetsperiode": {
                            "beskrivelse": "string",
                            "slutt": 1529408017906,
                            "start": 1529408017906
                        },
                        "identifikatorverdi": "string"
                    }
                },
                {
                    "antall": 0,
                    "fritekst": "string",
                    "pris": 0,
                    "systemId": {
                        "gyldighetsperiode": {
                            "beskrivelse": "string",
                            "slutt": 1529408017906,
                            "start": 1529408017906
                        },
                        "identifikatorverdi": "string"
                    }
                },
                {
                    "antall": 0,
                    "fritekst": "string",
                    "pris": 0,
                    "systemId": {
                        "gyldighetsperiode": {
                            "beskrivelse": "string",
                            "slutt": 1529408017906,
                            "start": 1529408017906
                        },
                        "identifikatorverdi": "string"
                    }
                },
                {
                    "antall": 0,
                    "fritekst": "string",
                    "pris": 0,
                    "systemId": {
                        "gyldighetsperiode": {
                            "beskrivelse": "string",
                            "slutt": 1529408017906,
                            "start": 1529408017906
                        },
                        "identifikatorverdi": "string"
                    }
                },
                {
                    "antall": 0,
                    "fritekst": "string",
                    "pris": 0,
                    "systemId": {
                        "gyldighetsperiode": {
                            "beskrivelse": "string",
                            "slutt": 1529408017906,
                            "start": 1529408017906
                        },
                        "identifikatorverdi": "string"
                    }
                },
                {
                    "antall": 0,
                    "fritekst": "string",
                    "pris": 0,
                    "systemId": {
                        "gyldighetsperiode": {
                            "beskrivelse": "string",
                            "slutt": 1529408017906,
                            "start": 1529408017906
                        },
                        "identifikatorverdi": "string"
                    }
                },
                {
                    "antall": 0,
                    "fritekst": "string",
                    "pris": 0,
                    "systemId": {
                        "gyldighetsperiode": {
                            "beskrivelse": "string",
                            "slutt": 1529408017906,
                            "start": 1529408017906
                        },
                        "identifikatorverdi": "string"
                    }
                }
            ],
            "fakturanummer": {
                "gyldighetsperiode": {
                    "beskrivelse": "string",
                    "slutt": 1529408017906,
                    "start": 1529408017906
                },
                "identifikatorverdi": "string"
            },
            "forfallsdato": 1529408017906,
            "leveringsdato": 1529408017906,
            "netto": 0,
            "total": 1500,
            "systemId": {
                "gyldighetsperiode": {
                    "beskrivelse": "string",
                    "slutt": 1529408017906,
                    "start": 1529408017906
                },
                "identifikatorverdi": "string"
            }
        },
        "sentToExternalSystem": false
    }
]

let orgId = "fake.no";

class Claims extends Component {

    constructor(props){
        super(props);
        this.state = {
            payments: [],
            fetchedValueIsUndefined: false,
        }
    }

    componentDidMount() {
        PaymentApi.fetchPayments(orgId).then(data => {
            console.log(data, "payments");
            if (data === undefined || data.length === undefined) {
                this.setState({ fetchedValueIsUndefined: true });
                return;
            }
            this.setState({ payments: data });
        }).then(() => {
            let paymentCopy = this.state.payments;
            //tenker at alle fakturaer har samme orgId
            let orgIdString = paymentCopy[0].ordrenummer;
            let firstDigit = orgIdString.match(/\d/)
            let indexOfFirstDigit = orgIdString.indexOf(firstDigit)

            paymentCopy.forEach(payment => {
                payment["numberOrdrenummer"]  = Number(payment["ordrenummer"].substr(indexOfFirstDigit));
            })
            this.setState({ payments: paymentCopy })
        });
    }

    renderErrorMessage() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>Sum Ting Wong, Try again later</div>
        )
    }

    renderPosts(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <ClaimTabs testDataFordring={this.state.payments}/>
            </div>
        )
    }

    render() {

        if (this.state.fetchedValueIsUndefined) {
            return (this.renderErrorMessage());
        }
        if (this.state.payments.length > 0) {
            return (this.renderPosts());
        } else {
            return (<LoadingProgress />);
        }
        
    };
}

Claims.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(Claims);
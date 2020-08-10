Feature: Clark Sanity Flow
    As a user of clark application
    I want to be able to buy a offer from the deals page
    So later that an be verified in the overview page.

    Scenario Outline: Clark Sanity
        Given I visit the clark landing page "https://staging.clark.de/de/app/contracts?cv=2"
        When I click on "Angebote" tab from the navigation bar
        And select "Pri­vat­haft­pflicht" in the deals
        And confirm the deal to proceed further
        And select insure for "Me alone" and click on further
        And select "None of the cases apply to me either" and click on further
        And select "Im Falle eines Schadens soll meine Geldbörse nicht belastet werden" for event of damage
        And provide additonal information for - Do you have any further information or comments for us? - as "I love insurance with CLARK"
        And click on Angebot anfordern
        And click on Zum Angebot to view the offers
        And click on recommended offer
        And register with email "<Email>" and password "<Password>"
        And provide personal information for whom the insurance belongs "<gender>", "<fname>", "<sname>", "<dob>", "<street>", "<houseNo>", "<place>", "<postCode>", "<phoneNumber>"
        And provide bank account "<accountno>" for purchasing offer
        And order tariff and open the over view page
        Then Check if "Privathaftpflicht" is purchased
        # Note test script appends a 4 digit random to the email address to avoid using existing emails
        Examples:
            | Email             | Password  | gender | fname   | sname      | dob        | street      | houseNo | place    | postCode | phoneNumber  | accountno              |
            | bharath@gmail.com | Test@1234 | Male   | bharath | sadanandam | 28.11.1994 | nord street | 5       | brussels | 60306    | 015229320777 | DE55500105174529223988 |
# | bharath@gmail.com | Test@1234 | Male   | bharath | sadanandam | 28.11.1994 | nord street | 5       | brussels | 60306    | 015229320777 | DE55500105174529223988 |


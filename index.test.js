/**
 * getSubOrdinates(3); // should return [{"Id": 2,"Name": "Emily
Employee","Role": 4}, {"Id": 5, "Name": "Steve Trainer","Role": 5}]
getSubOrdinates(1); // should return [{"Id": 2,"Name": "Emily Employee","Role": 4}, {"Id": 3,"Name": "Sam Supervisor","Role": 3},
{"Id": 4,"Name": "Mary Manager","Role": 2}, {"Id": 5, "Name": "Steve
Trainer","Role": 5}]
 */
const { getSubordinates } = require('./index');
const subordinates = require('./index');

test('getSubOrdinates(3) returns [{"Id": 2,"Name": "Emily Employee","Role": 4}, {"Id": 5, "Name": "Steve Trainer","Role": 5}]', () => {
    expect(
        getSubordinates(3)
    )
    .toStrictEqual(
        [
            {"Id": 2,"Name": "Emily Employee","Role": 4}, 
            {"Id": 5, "Name": "Steve Trainer","Role": 5}
        ]
    );
})

test('getSubOrdinates(1) returns [{"Id": 2,"Name": "Emily Employee","Role": 4}, {"Id": 3,"Name": "Sam Supervisor","Role": 3}, {"Id": 4,"Name": "Mary Manager","Role": 2}, {"Id": 5, "Name": "Steve Trainer","Role": 5}]', () => {
    expect(
        getSubordinates(1)
    ).toStrictEqual(
        [
            {"Id": 2,"Name": "Emily Employee","Role": 4},
            {"Id": 3,"Name": "Sam Supervisor","Role": 3},
            {"Id": 4,"Name": "Mary Manager","Role": 2}, 
            {"Id": 5, "Name": "Steve Trainer","Role": 5}
        ]
    )
})
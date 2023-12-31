"""empty message

Revision ID: 926f6b86f6d6
Revises: f4b278cb1b90
Create Date: 2023-07-17 18:16:41.845561

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '926f6b86f6d6'
down_revision = 'f4b278cb1b90'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('players', schema=None) as batch_op:
        batch_op.add_column(sa.Column('password', sa.String(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('players', schema=None) as batch_op:
        batch_op.drop_column('password')

    # ### end Alembic commands ###
